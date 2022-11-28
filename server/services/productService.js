const Product = require('../models/Product');
const CustomError = require('../errors');
const removeFileIfExist = require('../utils/removeFileIfExist');

const createProduct = async (product) => {
    const { error } = Product.schemaValidator(product);
    if (error) {
        removeFileIfExist(product.imageUrl);
        throw new CustomError.BadRequestError(error);
    }
    return await Product.create(product);
}

const updateProduct = async (id, updatedProduct) => {
    const { error } = Product.schemaValidator(updatedProduct);
    if (error) {
        removeFileIfExist(updatedProduct.imageUrl);
        throw new CustomError.BadRequestError(error);
    }
    const product = await Product.findOne({ _id: id});
    if (!product) {
        removeFileIfExist(updatedProduct.imageUrl);
        throw new CustomError.NotFoundError('المنتج غير موجود');
    }
    removeFileIfExist(product.imageUrl);
    Object.assign(product, updatedProduct);
    return await product.save();
}

const getAllProducts = async (page, limit) => {
    const products = await Product.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 });
    const count = await Product.find().count();

    return {
        products,
        totalPages: Math.ceil(count / limit),
        currentPage: +page,
    }
}

const getProduct = async (id) => {
    const product = await Product.findOne({ _id: id });
    if(!product){
        throw new CustomError.NotFoundError(`${id} المنتج غير موجود`);
    }
    return product;
}

module.exports = {
    createProduct,
    updateProduct,
    getAllProducts,
    getProduct,
}