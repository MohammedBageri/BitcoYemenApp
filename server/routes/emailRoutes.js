const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');
const { authenticateUser, authorizePermissions, ensureActive } = require('../middleware/authentication');

const {
    sendEmailHttp,
    createEmailTemplate,
    editEmailTemplate,
    getAllEmailTemplate,
    getEmailTemplate,
    deleteEmailTemplate,
} = require('../controllers/emailController');

const admRoles = [ roles.ADMIN, roles.MNGR ];

router.get('/template', authenticateUser, authorizePermissions(...admRoles), 
    getAllEmailTemplate);
router.get('/template/:id', authenticateUser, authorizePermissions(...admRoles), 
    getEmailTemplate);
router.post('/send', authenticateUser, authorizePermissions(...admRoles), 
    ensureActive, sendEmailHttp);
router.post('/template', authenticateUser, authorizePermissions(...admRoles), 
    ensureActive, createEmailTemplate);
router.post('/template/:id', authenticateUser, authorizePermissions(...admRoles), 
    ensureActive, editEmailTemplate);
router.delete('/template/:id', authenticateUser, authorizePermissions(...admRoles), 
    ensureActive, deleteEmailTemplate);

module.exports = router;