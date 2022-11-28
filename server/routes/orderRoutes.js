const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');

const { 
    authenticateUser, 
    authorizePermissions,
    ensureActive,
} = require('../middleware/authentication');

const {
    createOrder,
    addPaymentDetails,
    changeOrderStatus,
    getUserOrders,
    getOrder,
    getUserOrder,
    getAllOrders,
} = require('../controllers/orderController');

const admRoles = [ roles.ADMIN, roles.MNGR, roles.MNGR1 ];

router.get('/', authenticateUser, authorizePermissions(roles.USER), getUserOrders);
router.get('/adm', authenticateUser, 
    authorizePermissions(...admRoles, roles.ACCOUNTANT), getAllOrders);
router.get('/:id', authenticateUser, authorizePermissions(roles.USER), getUserOrder);
router.get('/adm/:id', authenticateUser, 
    authorizePermissions(...admRoles, roles.ACCOUNTANT), getOrder);
router.post('/', authenticateUser, authorizePermissions(roles.USER), ensureActive, createOrder);
router.post('/details/:id', authenticateUser, authorizePermissions(roles.USER), ensureActive, addPaymentDetails);
router.post('/status/:id', authenticateUser, authorizePermissions(...admRoles), 
    ensureActive, changeOrderStatus);

module.exports = router;