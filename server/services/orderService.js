const Order = require('../models/Order');
const Product = require('../models/Product');
const CustomError = require('../errors');
const generateRandomNumber = require('../utils/generateRandomNumber');

const createOrder = async (userId, productId) => {
    const product = await Product.findOne({ _id: productId });
    if (!product) {
        throw new CustomError.NotFoundError('المنتج غير موجود');
    }
    const order = new Order();
    order.user = userId;
    order.product = productId;
    order.price = product.price;
    order.orderNumber = await generateNewOrderNumber();
    order.statusCode = 1;
    return await order.save();
}

const addOrderPaymentDetails = async (userId, id, paymentDetails) => {
    const order = await Order.findOne({ _id: id, user: userId});
    if (!order) {
        throw new CustomError.NotFoundError('الطلب غير موجود');
    }
    if(order.statusCode !== 1){
        throw new CustomError.BadRequestError('لايمكنك التعديل على هذا الطلب');
    }
    order.paymentDetails = paymentDetails;
    order.statusCode = 2;
    return await order.save();
}

const changeOrderStatus = async (id, statusCode) => {
    if(isNaN(statusCode)){
        throw new CustomError.BadRequestError('statusCode ليس رقم');
    }
    if(statusCode < 1 || statusCode > 4){
        throw new CustomError.BadRequestError('statusCode يجب ان يكون بين 1 - 4');
    }
    const order = await Order.findOne({ _id: id });
    if (!order) {
        throw new CustomError.NotFoundError('الطلب غير موجود');
    }
    order.statusCode = statusCode;
    return await order.save();
}

const getUserOrders = async (userId) => {
    return await Order.find({ user: userId })
        .populate('product', '-price', Product);
}

const getOrder = async (id) => {
    const order = await Order.findOne({ _id: id })
        .populate('user', '-password -role -verificationToken -isVerified -verified -identityImageUrl -__v')
        .populate('product', '-price', Product);
    if (!order) {
        throw new CustomError.NotFoundError(`${id} الطلب غير موجود`);
    }
    return order;
}

const getAllOrders = async (page, limit, filter) => {
    const orders = await Order.find({...filter})
        .populate('user', '-password -role -verificationToken -isVerified -verified -identityImageUrl -__v')
        .populate('product', '-price', Product)
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 });
    const count = await Order.find({...filter}).count();

    return {
        orders,
        totalPages: Math.ceil(count / limit),
        currentPage: +page,
    }
}

async function generateNewOrderNumber(){
    let orderNumber = generateRandomNumber();
    let exist = await Order.findOne({ orderNumber });
    while (exist) {
        orderNumber = generateRandomNumber();
        exist = await Order.findOne({ orderNumber });
    }
    return orderNumber;
}

module.exports = {
    createOrder,
    addOrderPaymentDetails,
    changeOrderStatus,
    getUserOrders,
    getOrder,
    getAllOrders,
}