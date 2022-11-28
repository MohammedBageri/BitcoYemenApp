const Setting = require('../models/Setting');
const CustomError = require('../errors');

const setServiceAvailability = async (available) => {
    await createSettingIfNotExist();
    const setting = await Setting.findOne();
    setting.serviceAvailability = available
    return await setting.save();
}

const getServiceAvailability = async () => {
    const setting = await Setting.findOne();
    if(!setting) return false;
    return setting.serviceAvailability ? true : false;
}

const setTransactionExpiration = async (hours) => {
    if(isNaN(hours)){
        throw new CustomError.BadRequestError('ليس رقما صالحا');
    }
    await createSettingIfNotExist();
    const setting = await Setting.findOne();
    setting.transactionExpiration = hours;
    return setting.save();
}

const getTransactionExpiration = async () => {
    const setting = await Setting.findOne();
    if(!setting) return 2;
    return setting.transactionExpiration;
}

const setAffiliateRate = async (rate) => {
    if(isNaN(rate)){
        throw new CustomError.BadRequestError('ليس رقما صالحا');
    }
    if (rate>10 || rate<0.1) {
        throw new CustomError.BadRequestError('يجب ان تكون القيمة بين 0.1 - 10');
    }
    await createSettingIfNotExist();
    const setting = await Setting.findOne();
    setting.affiliateRate = rate;
    return await setting.save();
}

const getAffiliateRate  = async () => {
    const setting = await Setting.findOne();
    if(!setting) return 0.5;
    return setting.affiliateRate;
}

async function createSettingIfNotExist(){
    const count = await Setting.countDocuments();
    if (count === 0) {
        const setting = new Setting();
        await setting.save();
    }
}

module.exports = {
    setServiceAvailability,
    getServiceAvailability,
    setTransactionExpiration,
    getTransactionExpiration,
    setAffiliateRate,
    getAffiliateRate,

}