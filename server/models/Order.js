const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    orderNumber: {
        type: Number,
        require: true
    },
    paymentDetails: {
        type: String,
    },
    statusCode: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);