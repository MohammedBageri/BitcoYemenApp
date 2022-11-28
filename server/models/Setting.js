const mongoose = require('mongoose');

const SettingSchema = new mongoose.Schema({
    serviceAvailability: {
        type: Boolean,
        default: false,
        required: true,
    },
    transactionExpiration: {
        type: Number,
        required: true,
        default: 2,
    },
    affiliateRate: {
        type: Number,
        required: true,
        default: 0.5,
    }
});

module.exports = mongoose.model('setting', SettingSchema);