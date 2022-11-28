const mongoose = require('mongoose');
const decimal128toString = require('../utils/decimal128toString');

const AffiliateSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    total: {
        type: mongoose.Types.Decimal128,
        require: true
    },
    inAccount: {
        type: mongoose.Types.Decimal128,
        require: true
    },
}, { timestamps: true });

AffiliateSchema.path('total').get(decimal128toString);
AffiliateSchema.path('inAccount').get(decimal128toString);
AffiliateSchema.set('toJSON', { getters: true, virtuals: false });

module.exports = mongoose.model('Affiliate', AffiliateSchema);