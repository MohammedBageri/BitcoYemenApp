const mongoose = require('mongoose');
const Joi = require('joi');

const RecommendationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    tp1: {
        type: String,
        required: true,
    },
    tp2: {
        type: String,
        required: true,
    },
    tp3: {
        type: String,
        required: true,
    },
    sl: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now(),
    }
});

RecommendationSchema.statics.schemaValidator = function(recommendation) {
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        tp1: Joi.string().required(),
        tp2: Joi.string().required(),
        tp3: Joi.string().required(),
        sl: Joi.string().required(),
        status: Joi.string().required(),
    })

    return schema.validate(recommendation);
}

module.exports = mongoose.model('Recommendation', RecommendationSchema);

