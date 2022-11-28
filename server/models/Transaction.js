const mongoose = require('mongoose');
const decimal128toString = require('../utils/decimal128toString');

const TransactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    from: {
        type: mongoose.Types.ObjectId,
        ref: 'Currency',
        required: true,
    },
    to: {
        type: mongoose.Types.ObjectId,
        ref: 'Currency',
        required: true
    },
    exchangeRate: {
        send: {
            type: mongoose.Types.Decimal128,
            required: true,
        },
        receive: {
            type: mongoose.Types.Decimal128,
            required: true,
        },
    },
    transfer: {
        type: mongoose.Types.Decimal128,
        required: true,
    },
    receive: {
        type: mongoose.Types.Decimal128,
        required: true,
    },
    editedExchange: {
        transfer: {
            type: mongoose.Types.Decimal128,
        },
        receive: {
            type: mongoose.Types.Decimal128,
        },
    },
    statusCode: {
        type: Number,
        require: true,
        default: 1
    },
    transactionNumber: {
        type: Number,
        require: true
    },
    expires: {
        type: Date,
        required: true,
    },
    paymentDetails: {
        type: String,
    },
    paymentImageUrl: {
        type: String
    },
}, { timestamps: true } );

TransactionSchema.path('exchangeRate.send').get(decimal128toString);
TransactionSchema.path('exchangeRate.receive').get(decimal128toString);
TransactionSchema.path('transfer').get(decimal128toString);
TransactionSchema.path('receive').get(decimal128toString);
TransactionSchema.path('editedExchange.transfer').get(decimal128toString);
TransactionSchema.path('editedExchange.receive').get(decimal128toString);
TransactionSchema.set('toJSON', { getters: true, virtuals: false });

module.exports = mongoose.model('Transaction', TransactionSchema);