const { AffiliateService } = require('../services');
const CustomError = require('../errors');

const depositAccount = async (req, res) => {
    const { userId, amount } = req.body;
    const result = await AffiliateService.depositAccount(userId, amount);
    res.json(result);
}

const withdrawAccount = async (req, res) => {
    const { userId, amount } = req.body;
    const result = await AffiliateService.withdrawAccount(userId, amount);
    res.json(result);
}

const getAffiliateAccount = async (req, res) => {
    const { id } = req.params;
    const result = await AffiliateService.getAffiliateAccount(id);
    res.json(result);
}
const getAffiliateUserAccount = async (req, res) => {
    const userId = req.user.userId;
    console.log(userId);
    const result = await AffiliateService.getAffiliateAccount(userId);
    if(userId !== result.user){
        throw new CustomError.UnauthorizedError('لا يمكنك الوصول لهذا الحساب')
    }
    res.json(result);
}

module.exports = {
    depositAccount,
    withdrawAccount,
    getAffiliateAccount,
    getAffiliateUserAccount,
}