const ExchangeDirection = require('../models/ExchangeDirection');
const Currency = require('../models/Currency');
const CustomError = require('../errors');

const createExchangeDirection = async (exchangeDirection) => {
    const { error } = ExchangeDirection.schemaValidator(exchangeDirection);
    if (error) {
        throw new CustomError.BadRequestError(error);
    }
    if(exchangeDirection.from === exchangeDirection.to){
        throw new CustomError.BadRequestError('from & to القيم متساوية');
    }
    const exist = await ExchangeDirection.findOne(
        { from: exchangeDirection.from, to: exchangeDirection.to});
    if (exist) {
        throw new CustomError.BadRequestError('التحويل موجود بالفعل');
    }
    if(+exchangeDirection.maxExchange < +exchangeDirection.minExchange){
        throw new CustomError.BadRequestError('القيمة الكبرى اقل من الصغرى');
    }
    const count = await Currency.find().where('_id')
        .in([exchangeDirection.from, exchangeDirection.to]).count().exec();
    if (count !== 2) {
        throw new CustomError.NotFoundError('العملة غير موجودة');
    }

    return await ExchangeDirection.create(exchangeDirection);
}

const editExchangeDirection = async (id, updatedExDirection) => {
    const exchangeDirection = await ExchangeDirection.findOne({ _id: id });
    if (!exchangeDirection) {
        throw new CustomError.BadRequestError('التحويل غير موجود');
    }
    const { error } = ExchangeDirection.schemaValidator(updatedExDirection);
    if (error) {
        throw new CustomError.BadRequestError(error);
    }
    if(updatedExDirection.from === updatedExDirection.to){
        throw new CustomError.BadRequestError('from & to القيم متساوية');
    }
    const exist = await ExchangeDirection.findOne(
        { from: updatedExDirection.from, to: updatedExDirection.to}).where('_id').ne(id);
    if (exist) {
        throw new CustomError.BadRequestError('التحويل موجود بالفعل');
    }
    if(+updatedExDirection.maxExchange < +updatedExDirection.minExchange){
        throw new CustomError.BadRequestError('القيمة الكبرى اقل من الصغرى');
    }
    const count = await Currency.find().where('_id')
        .in([updatedExDirection.from, updatedExDirection.to]).count().exec();
    if (count !== 2) {
        throw new CustomError.NotFoundError('العملة غير موجودة');
    }

    Object.assign(exchangeDirection, updatedExDirection);
    return exchangeDirection.save();
}

const getAllExchangeDirections = async (page, limit, filter) => {
    const exchangeDirections = await ExchangeDirection.find({...filter})
        .populate('from')
        .populate('to')
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 });
    const count = await ExchangeDirection.find({...filter}).count();

    return {
        exchangeDirections,
        totalPages: Math.ceil(count / limit),
        currentPage: +page,
    }
}

const getExchangeDirection = async (from, to) => {
    const exchangeDirection = await ExchangeDirection.findOne({ from, to })
        .populate('from')
        .populate('to')
        .select('-__v');
    if (!exchangeDirection) {
        throw new CustomError.NotFoundError('التحويل غير موجود');
    }
    return exchangeDirection
}

const activateExDirection = async (id, isActive) => {
    let exchangeDirection = await ExchangeDirection.findOne({ _id: id });
    if (!exchangeDirection) {
        throw new CustomError.NotFoundError('التحويل غير موجود');
    }

    if(isActive) exchangeDirection.isActive = true; 
    else exchangeDirection.isActive = false;
    
    return await exchangeDirection.save()
}

module.exports = {
    createExchangeDirection,
    editExchangeDirection,
    getAllExchangeDirections,
    getExchangeDirection,
    activateExDirection,
}