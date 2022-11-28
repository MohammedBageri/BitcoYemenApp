const { ExchangeDirectionService } = require('../services');
const _ = require('lodash');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createExchangeDirection = async (req, res) => {
    const exchangeDirection = _.pick(req.body, [ 'from', 'to', 'exchangeRate', 
        'minExchange', 'maxExchange', 'description', 'isActive']);

    const result = await ExchangeDirectionService.createExchangeDirection(exchangeDirection);
    res.status(StatusCodes.CREATED).json(result);
}

const editExchangeDirection = async (req, res) => {
    const id = req.params.id;
    const exchangeDirection = _.pick(req.body, [ 'from', 'to', 'exchangeRate', 
        'minExchange', 'maxExchange', 'description', 'isActive']);

    const result = await ExchangeDirectionService.editExchangeDirection(id, exchangeDirection);
    res.status(StatusCodes.OK).json(result);
}

const getAllExchangeDirections = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const result = await ExchangeDirectionService.getAllExchangeDirections(page, limit, req.query);
    res.status(StatusCodes.OK).json(result);
}

const getExchangeDirection = async (req, res) => {
    const { from, to } = req.query;
    if(!from){
        throw new CustomError.BadRequestError('from لايوجد قيمة للـ');
    }
    if(!to){
        throw new CustomError.BadRequestError('to لايوجد قيمة للـ');
    }

    const result = await ExchangeDirectionService.getExchangeDirection(from, to);
    res.status(StatusCodes.OK).json(result);
}

const activateExDirection = async (req, res) => {
    const id = req.params.id;
    const { isActive } = req.body;

    const result = await ExchangeDirectionService.activateExDirection(id, isActive);
    res.status(StatusCodes.OK).json(result);
}

module.exports = {
    createExchangeDirection,
    editExchangeDirection,
    getAllExchangeDirections,
    getExchangeDirection,
    activateExDirection,
}