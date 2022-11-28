const mongoose = require('mongoose');

const EmailTemplateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    html: {
        type: String,
        required: true,
    },
    number: {
        type: Number
    }
});

module.exports = mongoose.model('EmailTemplate', EmailTemplateSchema);