const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');
const uploadImageMiddleware = require('../middleware/uploadImage');

const { authenticateUser, authorizePermissions, ensureActive } = require('../middleware/authentication');
const {
    createProduct,
    updateProduct,
    getAllProducts,
    getProduct,
} = require('../controllers/productController');

const folderName = 'product-images';
const admRoles = [ roles.ADMIN, roles.MNGR, roles.MNGR1 ];

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/', authenticateUser, authorizePermissions(...admRoles), 
    ensureActive, uploadImageMiddleware(folderName), createProduct);
router.post('/:id', authenticateUser, authorizePermissions(...admRoles), 
    ensureActive, uploadImageMiddleware(folderName), updateProduct);

module.exports = router;