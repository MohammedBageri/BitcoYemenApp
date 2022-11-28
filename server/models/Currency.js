const mongoose = require('mongoose');
const Joi = require('joi');

const CurrencySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    logoUrl: {
        type: String,
        required: true
    },
});

CurrencySchema.statics.schemaValidator = function(currency) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        code: Joi.string().alphanum().min(2).max(10).required(),
        isActive: Joi.boolean(),
        logoUrl: Joi.string()
    })

    return schema.validate(currency);
}

module.exports = mongoose.model('Currency', CurrencySchema);