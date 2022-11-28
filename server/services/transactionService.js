const Transaction = require('../models/Transaction');
const Currency = require('../models/Currency');
const ExchangeDirection = require('../models/ExchangeDirection');
const Setting = require('../models/Setting');
const CustomError = require('../errors');
const removeFileIfExist = require('../utils/removeFileIfExist');
const generateRandomNumber = require('../utils/generateRandomNumber');
const AffiliateService = require('./AffiliateService');

const createTransaction = async (
    user,
    from,
    to,
    amount,
) => {
    const setting = await Setting.findOne();
    if(!setting || !setting.serviceAvailability){
        throw new CustomError.BadRequestError('المشغل غير موجود حاليا');
    }

    if(isNaN(amount)){
        throw new CustomError.BadRequestError('amount ليس رقما صالحا');
    }

    const fromCurrency = await Currency.findOne({ _id: from});
    if (!fromCurrency) {
        throw new CustomError.NotFoundError('العملة من غير موجودة');
    }
    if(!fromCurrency.isActive){
        throw new CustomError.BadRequestError('العملة متوقفة حاليا');
    }

    const toCurrency = await Currency.findOne({ _id: to});
    if (!toCurrency) {
        throw new CustomError.NotFoundError('العملة الى غير موجودة');
    }
    if(!toCurrency.isActive){
        throw new CustomError.BadRequestError('العملة متوقفة حاليا');
    }

    const exchangeDirection = await ExchangeDirection.findOne({ from, to });
    if (!exchangeDirection || !exchangeDirection.isActive) {
        throw new CustomError.NotFoundError('التحويل غير متاح حاليا');
    }
    if(amount < +exchangeDirection.minExchange){
        throw new CustomError.BadRequestError(`${exchangeDirection.minExchange} القيمة اقل من اقل قيمة مسموحة`);
    }
    if(amount > +exchangeDirection.maxExchange){
        throw new CustomError.BadRequestError(`${exchangeDirection.maxExchange} القمة اكبر من اكبر قيمة مسموحة`);
    }

    const receive = (amount * exchangeDirection.exchangeRate.receive) 
        / exchangeDirection.exchangeRate.send;

    const transaction = new Transaction();
    transaction.user = user;
    transaction.from = fromCurrency._id;
    transaction.to = toCurrency._id;
    transaction.exchangeRate = exchangeDirection.exchangeRate;
    transaction.transactionNumber = await generateNewTransactionNumber();
    transaction.transfer = amount;
    transaction.receive = Number(receive).toFixed(2);

    const dt = new Date();
    const hours = setting.transactionExpiration;
    dt.setHours(dt.getHours() + hours);
    transaction.expires = dt;

    return await transaction.save();
}

const addPaymentDetails = async (userId, id, paymentDetails, imageUrl) => {
    const transaction = await Transaction.findOne({ _id: id, user: userId});
    if (!transaction) {
        removeFileIfExist(imageUrl);
        throw new CustomError.BadRequestError('التحويل غير موجود');
    }
    if(transaction.statusCode !== 1){
        removeFileIfExist(imageUrl);
        throw new CustomError.BadRequestError('لا يمكنك التعديل على هاذا التحويل');
    }
    if(transaction.expires < Date.now()){
        removeFileIfExist(imageUrl);
        throw new CustomError.BadRequestError('انتهاء وقت الصلاحية لهذه العملية');
    }

    transaction.statusCode = 2;
    transaction.paymentDetails = paymentDetails;
    transaction.paymentImageUrl = imageUrl;
    return await transaction.save();
}

const changeTransactionStatus = async (id, statusCode) => {
    if(isNaN(statusCode)){
        throw new CustomError.BadRequestError('statusCode ليس رقما صالحا');
    }
    if(statusCode < 1 || statusCode > 5){
        throw new CustomError.BadRequestError('statusCode 1 - 5 يجب ان يكون بين ');
    }
    const transaction = await Transaction.findOne({ _id: id})
        .populate('user', '-password -role -verificationToken -isVerified -verified -__v');
    if (!transaction) {
        throw new CustomError.BadRequestError('التحويل غير موجود');
    }
    if (transaction.statusCode === 4) {
        throw new CustomError.BadRequestError('العملية تم اتمامها بالفعل')
    }
    transaction.statusCode = statusCode;
    if(statusCode === 4){
        const affiliateUser = transaction.user.affiliateRef
        if(affiliateUser){
            const setting = await Setting.findOne();
            let amount = 0;
            if(!setting){
               amount =  transaction.receive * 0.5 / 100;
            } else {
                amount = transaction.receive * setting.affiliateRate / 100;
            }
            console.log(amount);
            await AffiliateService.depositAccount(affiliateUser ,amount)
        }
    }
    return await transaction.save();
}

const editTransactionExchange = async (id, send) => {
    if(isNaN(send)){
        throw new CustomError.BadRequestError('send ليس رقما صالحا');
    }
    const transaction = await Transaction.findOne({ _id: id})
    .populate('user', '-password -role -verificationToken -isVerified -verified -__v');
    if (!transaction) {
        throw new CustomError.BadRequestError('التحويل غير موجود');
    }
    if (transaction.statusCode === 4) {
        throw new CustomError.BadRequestError('العملية تم اتمامها بالفعل')
    }
    if (transaction.statusCode === 5) {
        throw new CustomError.BadRequestError('العملية تم رفضها بالفعل')
    }

    transaction.editedExchange.transfer = send;
    const receive = (send * transaction.exchangeRate.receive) 
        / transaction.exchangeRate.send;
    transaction.editedExchange.receive = receive;
    return transaction.save();
}

const getUserTransactions = async (userId) => {
    return await Transaction.find({user: userId})
    .populate('user', '-password -role -verificationToken -isVerified -verified -__v')
    .populate('from', '-isActive -__v')
    .populate('to', '-isActive -__v')
    .select('-__v');
}

const getTransaction = async (id) => {
    const transaction = await Transaction.findOne({ _id: id})
        .populate('user', '-password -role -verificationToken -isVerified -verified -__v')
        .populate('from', '-isActive -__v')
        .populate('to', '-isActive -__v')
        .select('-__v');
    if(!transaction) throw new CustomError.NotFoundError('التحويل غير موجود');
    return transaction;
}

const getAllTransactions = async (page, limit, filter) => {
    const transactions = await Transaction.find({...filter})
        .populate('user', '-password -role -verificationToken -isVerified -verified -__v')
        .populate('from', '-isActive -__v')
        .populate('to', '-isActive -__v')
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 });
    const count = await Transaction.find({...filter}).count();

    return {
        transactions,
        totalPages: Math.ceil(count / limit),
        currentPage: +page,
    }
}

async function generateNewTransactionNumber(){
    let transactionNumber = generateRandomNumber();
    let exist = await Transaction.findOne({ transactionNumber });
    while (exist) {
        transactionNumber = generateRandomNumber();
        exist = await Transaction.findOne({ transactionNumber });
    }
    return transactionNumber;
}

module.exports = {
    createTransaction,
    addPaymentDetails,
    changeTransactionStatus,
    editTransactionExchange,
    getUserTransactions,
    getTransaction,
    getAllTransactions,
}
