const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');
const uploadImageMiddleware = require('../middleware/uploadImage');
const {
    authenticateUser,
    authorizePermissions,
    ensureActive,
  } = require('../middleware/authentication');

const {
    createTransaction,
    addPaymentDetails,
    changeTransactionStatus,
    editTransactionExchange,
    getUserTransactions,
    getUserTransaction,
    getTransaction,
    getAllTransactions
} = require('../controllers/transactionController');

const folderName = 'transaction-images';
const admRoles = [ roles.ADMIN, roles.MNGR, roles.ACCOUNTANT ];

router.get('/', authenticateUser, getUserTransactions);
router.get('/adm', authenticateUser, authorizePermissions(...admRoles), 
  getAllTransactions);
router.get('/:id', authenticateUser, getUserTransaction);
router.get('/adm/:id', authenticateUser, authorizePermissions(...admRoles), getTransaction);

router.post('/', authenticateUser, authorizePermissions(roles.USER), ensureActive, createTransaction);
router.post('/editExchange/:id', authenticateUser, authorizePermissions(roles.ADMIN), editTransactionExchange);
router.post('/details/:id', authenticateUser, authorizePermissions(roles.USER), ensureActive,
  uploadImageMiddleware(folderName), addPaymentDetails);
router.post('/status/:id', authenticateUser, authorizePermissions(roles.ADMIN, roles.MNGR), 
  ensureActive, changeTransactionStatus);  


module.exports = router;