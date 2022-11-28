const { TransactionService } = require('../services');
const CustomError = require('../errors');
const { StatusCodes } = require('http-status-codes');
const removeFileIfExist = require('../utils/removeFileIfExist');
const sendCreateTransactionEmail = require('../utils/sendCreateTransactionEmail');
const sendSuccessTransactionEmail = require('../utils/sendSuccessTransactionEmail');

const createTransaction = async (req, res) => {
    const userId = req.user.userId;
    const { from, to, amount } = req.body;
    if(!from || !to || !amount ){
        throw new CustomError.BadRequestError('الرجاء ارفاق كل البيانات');
    }
    const result = await TransactionService.createTransaction(userId, from, to, amount);
    try {
        sendCreateTransactionEmail(result._id);
    } catch (error) {
      console.error(error);  
    } 
    process.emit('newTransaction', result._id); //to send socket on new transaction to admin Dashboard
    res.status(StatusCodes.OK).json(result);
}

const addPaymentDetails = async (req, res) => {
    const userId = req.user.userId;
    const id = req.params.id;
    const { paymentDetails } = req.body;
    if (!paymentDetails) {
        removeFileIfExist(req.imagePath);
        throw new CustomError.BadRequestError('paymentDetails لايوجد قيمة للـ');
    }

    const result = await TransactionService.addPaymentDetails(userId, id, paymentDetails, req.imagePath);
    res.status(StatusCodes.OK).json(result);
}

const changeTransactionStatus = async (req, res) => {
    const id = req.params.id;
    const { statusCode } = req.body;
    const result = await TransactionService.changeTransactionStatus(id, statusCode);
    if (result.statusCode === 4) {
        try {
            sendSuccessTransactionEmail(result._id); 
        } catch (error) {
          console.error(error);  
        }  
    }
    res.status(StatusCodes.OK).json(result);
}

const editTransactionExchange = async (req, res) => {
    const id = req.params.id;
    const { send } = req.body;
    const result = await TransactionService.editTransactionExchange(id, send);
    res.status(StatusCodes.OK).json(result);
}

const getUserTransactions = async (req, res) => {
    const userId = req.user.userId;
    const transactions = await TransactionService.getUserTransactions(userId);
    if (!transactions) {
        throw new CustomError.NotFoundError('لم يتم العثور على العمليات');
    }
    res.status(StatusCodes.OK).json(transactions);
}

const getUserTransaction = async (req, res) => {
    const userId = req.user.userId;
    const id = req.params.id;
    const transaction = await TransactionService.getTransaction(id);
    if (!transaction) {
        throw new CustomError.NotFoundError('لم يتم العثور على العملية');
    }
    if(transaction.user._id.toString() !== userId){
        throw new CustomError.UnauthorizedError('لا تستطيع الوصول لهذه العملية');
    }
    res.status(StatusCodes.OK).json(transaction);
}

const getTransaction = async (req, res) => {
    const id = req.params.id;
    const transaction = await TransactionService.getTransaction(id);
    res.status(StatusCodes.OK).json(transaction);
}

const getAllTransactions = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    const result = await TransactionService.getAllTransactions(page, limit, req.query);
    res.status(StatusCodes.OK).json(result);
}

module.exports = {
    createTransaction,
    addPaymentDetails,
    changeTransactionStatus,
    editTransactionExchange,
    getUserTransactions,
    getUserTransaction,
    getTransaction,
    getAllTransactions,
}