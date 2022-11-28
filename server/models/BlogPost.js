const mongoose = require('mongoose');
const Joi = require('joi');

const BlogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true});

BlogPostSchema.statics.schemaValidator = function(blogPost) {
    const schema = Joi.object({
        title: Joi.string().min(8).max(80).required(),
        body: Joi.string().min(80).required(),
        imageUrl: Joi.string(),
    })

    return schema.validate(blogPost);
}

module.exports = mongoose.model('BlogPost', BlogPostSchema);