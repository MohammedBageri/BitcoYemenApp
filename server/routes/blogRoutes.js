const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');
const uploadImageMiddleware = require('../middleware/uploadImage');
const { authenticateUser, authorizePermissions, ensureActive } = require('../middleware/authentication');
const {
    getAllBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog,
} = require('../controllers/blogController');

const folderName = 'blog-images';
const admRoles = [ roles.ADMIN, roles.MNGR, roles.MNGR1 ];

router.get('/', getAllBlogs);
router.get('/:id', getBlog);
router.post('/', authenticateUser, authorizePermissions(...admRoles), 
    ensureActive, uploadImageMiddleware(folderName), createBlog);
router.post('/:id', authenticateUser, authorizePermissions(...admRoles), 
    ensureActive, uploadImageMiddleware(folderName), updateBlog);
router.delete('/:id', authenticateUser, authorizePermissions(...admRoles), 
    ensureActive, deleteBlog);

module.exports = router;