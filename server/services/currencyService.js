const Currency = require('../models/Currency');
const CustomError = require('../errors');
const removeFile = require('../utils/removeFile');

const getAllCurrencies = async () => {
    return await Currency.find().select('-__v');
}

const getSingleCurrency = async (id) => {
    const currency = await Currency.findOne({ _id: id}).select('-__v');

    if(!currency){
        throw new CustomError.NotFoundError(`${id} لا توجد العملة`);
    };
    return currency;
}

const addCurrency = async (currency) => {
    const { error } = Currency.schemaValidator(currency);
    if (error) {
        removeFile(currency.logoUrl);
        throw new CustomError.BadRequestError(error);
    }

    const exist = await Currency.findOne({ name: currency.name })
    if (exist) {
        removeFile(currency.logoUrl);
        throw new CustomError.BadRequestError('العملة موجودة بالفعل');
    }

    return await Currency.create(currency);
}

const updateCurrency = async (id, updatedCurrency) => {
    const { error } = Currency.schemaValidator(updatedCurrency);
    if (error) {
        throw new CustomError.BadRequestError(error);
    }
    let currency = await Currency.findOne({ _id: id });
    if (!currency) {
        throw new CustomError.BadRequestError('العملة لا توجد');
    }
    if(updatedCurrency.logoUrl){
        removeFile(currency.logoUrl);
    }

    Object.assign(currency, updatedCurrency);
    return await currency.save();
}

const activateCurrency = async (id, isActive) => {
    let currency = await Currency.findOne({ _id: id });
    if (!currency) {
        throw new CustomError.BadRequestError('العملة لا توجد');
    }

    if(isActive) currency.isActive = true; 
    else currency.isActive = false;
    
    return await currency.save()
}

module.exports = {
    getAllCurrencies,
    getSingleCurrency,
    addCurrency,
    updateCurrency,
    activateCurrency,
}