const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');
const { authenticateUser, authorizePermissions, ensureActive } = require('../middleware/authentication');

const {
    depositAccount,
    withdrawAccount,
    getAffiliateAccount,
    getAffiliateUserAccount
} = require('../controllers/AffiliateController');

const admRoles = [ roles.ADMIN ];

router.get('/', authenticateUser, authorizePermissions(roles.USER), getAffiliateUserAccount);
router.get('/:id', authenticateUser, authorizePermissions(...admRoles), getAffiliateAccount);
router.post('/deposit', authenticateUser, authorizePermissions(...admRoles), depositAccount);
router.post('/withdraw', authenticateUser, authorizePermissions(...admRoles), withdrawAccount);

module.exports = router;