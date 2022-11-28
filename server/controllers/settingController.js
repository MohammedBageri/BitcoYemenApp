const { SettingService } = require('../services');

const setServiceAvailability = async (req, res) => {
    const { available } = req.body;
    const result = await SettingService.setServiceAvailability(available);
    res.json(result);
}

const getServiceAvailability = async (req, res) => {
    const available = await SettingService.getServiceAvailability();
    res.json({ available });
}

const setTransactionExpiration = async (req, res) => {
    const { transactionExpiration } = req.body;
    const result = await SettingService.setTransactionExpiration(transactionExpiration);
    res.json(result);
}

const getTransactionExpiration = async (req, res) => {
    const transactionExpiration = await SettingService.getTransactionExpiration();
    res.json({ transactionExpiration });
}

const setAffiliateRate = async (req, res) => {
    const { affiliateRate } = req.body;
    const result = await SettingService.setAffiliateRate(affiliateRate);
    res.json(result);
}

const getAffiliateRate = async (req, res) => {
    const affiliateRate = await SettingService.getAffiliateRate();
    res.json({ affiliateRate });
}

module.exports = {
    setServiceAvailability,
    getServiceAvailability,
    setTransactionExpiration,
    getTransactionExpiration,
    setAffiliateRate,
    getAffiliateRate,
}