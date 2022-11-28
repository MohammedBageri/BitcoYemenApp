const { RecommendationService } = require('../services');
const CustomError = require('../errors');
const _ = require('lodash');
const { StatusCodes } = require('http-status-codes');

const createRecommendation = async (req, res) => {
    const recommendation = _.pick(req.body, [ 'name', 'price', 'tp1', 'tp2', 'tp3', 'sl', 'status']);
    const result = await RecommendationService.createRecommendation(recommendation);
    res.status(StatusCodes.CREATED).json(result);
}

const editRecommendation = async (req, res) => {
    const { id } = req.params;
    const recommendation = _.pick(req.body, [ 'name', 'price', 'tp1', 'tp2', 'tp3', 'sl', 'status']);
    const result = await RecommendationService.editRecommendation(id, recommendation);
    res.status(StatusCodes.OK).json(result);
}

const getAllRecommendations = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const result = await RecommendationService.getAllRecommendations(page, limit, req.query);
    res.status(StatusCodes.OK).json(result);
}

const getRecommendation = async (req, res) => {
    const { id } = req.params;
    const result = await RecommendationService.getRecommendation(id);
    res.status(StatusCodes.OK).json(result);
}

const deleteRecommendation = async (req, res) => {
    const { id } = req.params;
    const result = await RecommendationService.deleteRecommendation(id);
    res.status(StatusCodes.OK).json(result);
}
module.exports = {
    createRecommendation,
    editRecommendation,
    getAllRecommendations,
    getRecommendation,
    deleteRecommendation,
}
