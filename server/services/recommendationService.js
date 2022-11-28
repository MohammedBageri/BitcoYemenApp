const Recommendation = require('../models/Recommendation');
const CustomError = require('../errors');

const createRecommendation = async (recommendation) => {
    const { error } = Recommendation.schemaValidator(recommendation);
    if (error) {
        throw new CustomError.BadRequestError(error);
    }
    return await Recommendation.create(recommendation);
}

const editRecommendation = async (id, updatedRecommendation) => {
    const { error } = Recommendation.schemaValidator(updatedRecommendation);
    if (error) {
        throw new CustomError.BadRequestError(error);
    }
    let recommendation = await Recommendation.findOne({ _id: id });
    if (!recommendation) {
        throw new CustomError.NotFoundError(`${id} التوصية غير موجودة`);
    }
    Object.assign(recommendation, updatedRecommendation);
    return await recommendation.save();
}

const getAllRecommendations = async (page, limit, filter) => {
    const recommendations = await Recommendation.find({...filter})
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 });
    const count = await Recommendation.find({...filter}).count();

    return {
        recommendations,
        totalPages: Math.ceil(count / limit),
        currentPage: +page,
    }
}

const getRecommendation = async (id) => {
    const recommendation = await Recommendation.findOne({ _id: id});
    if (!recommendation) {
        throw new CustomError.NotFoundError(`${id} التوصية غير موجودة`);
    }
    return recommendation;
}

const deleteRecommendation = async (id) => {
    const recommendation = await Recommendation.findOne({ _id: id});
    if (!recommendation) {
        throw new CustomError.NotFoundError(`${id} التوصية غير موجودة`);
    }
    return await recommendation.delete();
}

module.exports = {
    createRecommendation,
    editRecommendation,
    getAllRecommendations,
    getRecommendation,
    deleteRecommendation,
}