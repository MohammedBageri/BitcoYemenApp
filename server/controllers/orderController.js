const { OrderService } = require('../services');
const CustomError = require('../errors');
const { StatusCodes } = require('http-status-codes');

const createOrder = async (req, res) => {
    const { userId } = req.user;
    const { productId } = req.body;
    if (!productId) {
        throw new CustomError.BadRequestError('productId لايوجد قيمة للـ');
    }
    const result = await OrderService.createOrder(userId, productId);
    process.emit('newOrder', result._id); //to send socket on new order to admin Dashboard
    res.status(StatusCodes.OK).json(result);
}

const addPaymentDetails = async (req, res) => {
    const { userId } = req.user;
    const orderId = req.params.id;
    const { paymentDetails } = req.body;
    if(!orderId){
        throw new CustomError.BadRequestError('orderId لايوجد قيمة للـ');
    }
    if(!paymentDetails){
        throw new CustomError.BadRequestError('paymentDetails لايوجد قيمة للـ');
    }
    const result = await OrderService.addOrderPaymentDetails(userId, orderId, paymentDetails);
    res.status(StatusCodes.OK).json(result);
}

const changeOrderStatus = async (req, res) => {
    const id = req.params.id;
    const { statusCode } = req.body;

    const result = await OrderService.changeOrderStatus(id, statusCode);
    res.status(StatusCodes.OK).json(result);
}

const getUserOrders = async (req, res) => {
    const { userId } = req.user;
    const result = await OrderService.getUserOrders(userId);
    res.status(StatusCodes.OK).json(result);
}

const getOrder = async (req, res) => {
    const { id } = req.params;
    const result = await OrderService.getOrder(id);
    res.status(StatusCodes.OK).json(result);
}

const getUserOrder = async (req, res) => {
    const { userId } = req.user;
    const { id } = req.params;
    const order = await OrderService.getOrder(id);
    if (order.user._id.toString() !== userId) {
        throw new CustomError.UnauthorizedError('لا تستطيع الوصول لهاذه الطلبية');
    }
    res.status(StatusCodes.OK).json(order);
}

const getAllOrders = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    const result = await OrderService.getAllOrders(page, limit, req.query);
    res.status(StatusCodes.OK).json(result);
}

module.exports = {
    createOrder,
    addPaymentDetails,
    changeOrderStatus,
    getUserOrders,
    getOrder,
    getUserOrder,
    getAllOrders,
}