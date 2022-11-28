const mongoose = require('mongoose');
const Joi = require('joi');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }
});

ProductSchema.statics.schemaValidator = function(product) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        price: Joi.number().required(),
        details: Joi.string().min(10).required(),
        imageUrl: Joi.string()
    });

    return schema.validate(product);
}

module.exports = mongoose.model('product', ProductSchema);