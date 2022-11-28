const { CurrencyService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const _ = require('lodash');

const getAllCurrencies = async (req, res) => {
    const currencies = await CurrencyService.getAllCurrencies();
    res.status(StatusCodes.OK).json(currencies);
}

const getSingleCurrency = async (req, res) => {
    const currencyId = req.params.id;
    const currency = await CurrencyService.getSingleCurrency(currencyId);
    res.status(StatusCodes.OK).json(currency);
}

const addCurrency = async (req, res) => {
    const currency = _.pick(req.body, [ 'name', 'code', 'isActive' ]);

    if(!req.imagePath){
        throw new CustomError.BadRequestError('الرجاء ارفاق صورة');
    }
    currency.logoUrl = req.imagePath;
    const result = await CurrencyService.addCurrency(currency);
    res.status(StatusCodes.CREATED).json(result);
}

const updateCurrency = async (req, res) => {
    const id = req.params.id;
    const updatedCurrency = _.pick(req.body, [ 'name', 'code', 'isActive' ]);

    if(req.imagePath){
        updatedCurrency.logoUrl = req.imagePath;
    }

    const result = await CurrencyService.updateCurrency(id, updatedCurrency);
    res.status(StatusCodes.OK).json(result);
}

const activateCurrency = async (req, res) => {
    const id = req.params.id;
    const { isActive } = req.body;

    const result = await CurrencyService.activateCurrency(id, isActive);
    res.status(StatusCodes.CREATED).json(result);
}

module.exports = {
    getAllCurrencies,
    getSingleCurrency,
    addCurrency,
    updateCurrency,
    activateCurrency,
}