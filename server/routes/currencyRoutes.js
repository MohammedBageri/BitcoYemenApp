const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');
const uploadImageMiddleware = require('../middleware/uploadImage');

const { authenticateUser, authorizePermissions, ensureActive } = require('../middleware/authentication');
const {
    getAllCurrencies,
    getSingleCurrency,
    addCurrency,
    updateCurrency,
    activateCurrency,
} = require('../controllers/currencyController');

const folderName = 'currency-images';
const admRoles = [ roles.ADMIN, roles.MNGR ];

router.get('/', getAllCurrencies);
router.get('/:id', getSingleCurrency);
router.post('/', authenticateUser, authorizePermissions(...admRoles), 
    ensureActive ,uploadImageMiddleware(folderName), addCurrency);
router.post('/:id', authenticateUser, authorizePermissions(...admRoles), 
    ensureActive, uploadImageMiddleware(folderName), updateCurrency);
router.post('/activate/:id', authenticateUser, authorizePermissions(...admRoles),
    ensureActive, activateCurrency); // to set currency active or un-active

module.exports = router;