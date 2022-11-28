const mongoose = require('mongoose');
const Joi = require('joi');
const validateObjectIdJoi = require('../utils/validateObjectIdJoi');
const decimal128toString = require('../utils/decimal128toString');

const ExchangeDirectionSchema = new mongoose.Schema({
    from: {
        type: mongoose.Types.ObjectId,
        ref: 'Currency',
        required: true,
    },
    to: {
        type: mongoose.Types.ObjectId,
        ref: 'Currency',
        required: true,
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
    minExchange: {
        type: mongoose.Types.Decimal128,
        required: true,
    },
    maxExchange: {
        type: mongoose.Types.Decimal128,
        required: true,
    },
    description: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },

});

ExchangeDirectionSchema.path('exchangeRate.send').get(decimal128toString);
ExchangeDirectionSchema.path('exchangeRate.receive').get(decimal128toString);
ExchangeDirectionSchema.path('minExchange').get(decimal128toString);
ExchangeDirectionSchema.path('maxExchange').get(decimal128toString);
ExchangeDirectionSchema.set('toJSON', { getters: true, virtuals: false });

ExchangeDirectionSchema.statics.schemaValidator = function(direction) {
    const schema = Joi.object({
        from: Joi.string().custom(validateObjectIdJoi, 'aaaa').required(),
        to: Joi.string().custom(validateObjectIdJoi, 'aaaa').required(),
        exchangeRate: Joi.object({
            send: Joi.number().min(0).required(),
            receive: Joi.number().min(0).required(),
        }),
        minExchange: Joi.number().min(0).required(),
        maxExchange: Joi.number().min(0).required(),
        description: Joi.string(),
        isActive: Joi.boolean(),
    })

    return schema.validate(direction);
}

module.exports = mongoose.model('ExchangeDirection', ExchangeDirectionSchema);