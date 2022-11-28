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
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
  activateUser,
  updateUserAdmin,
  updateUserPasswordAdmin,
} = require('../controllers/userController');

const folderName = 'identity-images';
const admRoles = [ roles.ADMIN, roles.MNGR ];

router
  .route('/')
  .get(authenticateUser, authorizePermissions(...admRoles), ensureActive, getAllUsers);

router.route('/showMe').get(authenticateUser, showCurrentUser);
router.route('/updateUser').patch(authenticateUser, authorizePermissions(roles.ADMIN, roles.USER), 
  ensureActive, uploadImageMiddleware(folderName), updateUser);
router.route('/updateUserPassword').patch(authenticateUser, 
  ensureActive, authorizePermissions(roles.ADMIN, roles.USER), updateUserPassword);
router.post('/activate/:id', authenticateUser, authorizePermissions(...admRoles), 
  ensureActive ,activateUser);
router.route('/:id').get(authenticateUser, authorizePermissions(...admRoles), getSingleUser);

router.post('/updateUser/:id', authenticateUser, 
  authorizePermissions(roles.ADMIN), updateUserAdmin);
router.post('/updateUserPassword/:id', authenticateUser, 
  authorizePermissions(roles.ADMIN), updateUserPasswordAdmin);

module.exports = router;
