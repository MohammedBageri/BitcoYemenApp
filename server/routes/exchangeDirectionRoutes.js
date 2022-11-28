const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');
const { authenticateUser, authorizePermissions, ensureActive } = require('../middleware/authentication');

const {
    createExchangeDirection,
    editExchangeDirection,
    getAllExchangeDirections,
    getExchangeDirection,
    activateExDirection,
} = require('../controllers/exchangeDirectionController');

const admRoles = [ roles.ADMIN, roles.MNGR ];

router.get('/', getExchangeDirection);
router.get('/all', authenticateUser, authorizePermissions(...admRoles), 
    getAllExchangeDirections);
router.post('/', authenticateUser, authorizePermissions(...admRoles), 
    ensureActive, createExchangeDirection);
router.post('/:id', authenticateUser, authorizePermissions(...admRoles), 
    ensureActive, editExchangeDirection);
router.post('/activate/:id', authenticateUser, authorizePermissions(...admRoles),
    ensureActive, activateExDirection); // to set exchange direction active or un-active

module.exports = router;