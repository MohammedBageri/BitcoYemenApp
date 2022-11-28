const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');
const { authenticateUser, authorizePermissions } = require('../middleware/authentication');

const {
    setServiceAvailability,
    getServiceAvailability,
    setTransactionExpiration,
    getTransactionExpiration,
    setAffiliateRate,
    getAffiliateRate,
} = require('../controllers/settingController');

router.get('/available', getServiceAvailability);
router.post('/available', authenticateUser, authorizePermissions(roles.ADMIN),setServiceAvailability);
router.get('/transactionExpiration', authenticateUser, 
    authorizePermissions(roles.ADMIN), getTransactionExpiration);
router.post('/transactionExpiration', authenticateUser, 
    authorizePermissions(roles.ADMIN), setTransactionExpiration);
router.get('/affiliateRate', authenticateUser, 
    authorizePermissions(roles.ADMIN), getAffiliateRate);
router.post('/affiliateRate', authenticateUser, 
    authorizePermissions(roles.ADMIN), setAffiliateRate);

module.exports = router;