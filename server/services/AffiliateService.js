const Affiliate = require('../models/Affiliate');
const User = require('../models/User');
const CustomError = require('../errors');

// Withdraw deposit

const depositAccount = async (userId, amount) => {
    if(isNaN(amount) || amount < 0.0){
        throw new CustomError.BadRequestError('amount ليس رقما صالحا');
    }
    const account = await Affiliate.findOne({ user: userId });
    if (!account) {
        const user = await User.findOne({ _id: userId })
        if (!user || user.role !== 'user') {
            throw new CustomError.NotFoundError('المستخدم غير موجود');
        }
        return await Affiliate.create({ user: userId, total: amount, inAccount: amount });
    }
    return await account.updateOne({ $inc: { total: amount, inAccount: amount }});
}

const withdrawAccount = async (userId, amount) => {
    if(isNaN(amount) || amount < 0){
        throw new CustomError.BadRequestError('amount ليس رقما صالحا');
    }
    const account = await Affiliate.findOne({ user: userId });
    if (!account) {
        throw new CustomError.NotFoundError('الحساب غير موجود');
    }
    if (amount > account.inAccount) {
        throw new CustomError.BadRequestError('amount اكبر المبلغ الموجود في الحساب')
    }
    return await account.updateOne({ $inc: { inAccount: -amount }});
}

const getAffiliateAccount = async (userId) => {
    const account = await Affiliate.findOne({ user: userId });
    if (!account) {
        const user = await User.findOne({ _id: userId })
        if (!user || user.role !== 'user') {
            throw new CustomError.NotFoundError('المستخدم غير موجود');
        }
        return {
            user: userId,
            total: 0, 
            inAccount: 0
        }
    }
    return account;
}

module.exports = {
    depositAccount,
    withdrawAccount,
    getAffiliateAccount,
}