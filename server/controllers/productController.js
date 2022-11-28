const { ProductService } = require('../services');
const CustomError = require('../errors');
const _ = require('lodash');
const { StatusCodes } = require('http-status-codes');

const createProduct = async (req, res) => {
    const product = _.pick(req.body, [ 'name', 'price', 'details']);
    if (!req.imagePath) {
        throw new CustomError.BadRequestError('الرجاء ارفاق صورة للمنتج');
    }
    product.imageUrl = req.imagePath;
    const result = await ProductService.createProduct(product);
    res.status(StatusCodes.CREATED).json(result);
}

const updateProduct = async (req, res) => {
    const id = req.params.id;
    const product = _.pick(req.body, [ 'name', 'price', 'details']);
    if (req.imagePath) {
        product.imageUrl = req.imagePath;
    }
    const result = await ProductService.updateProduct(id, product);
    res.status(StatusCodes.OK).json(result);
}

const getAllProducts = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    const result = await ProductService.getAllProducts(page, limit);
    res.status(StatusCodes.OK).json(result);
}

const getProduct = async (req, res) => {
    const id = req.params.id;
    const result = await ProductService.getProduct(id);
    res.status(StatusCodes.OK).json(result);
}

module.exports = {
    createProduct,
    updateProduct,
    getAllProducts,
    getProduct,
}