const express = require('express');
const router = express.Router();
const uploadImageMiddleware = require('../middleware/uploadImage');

const { authenticateUser } = require('../middleware/authentication');

const {
  register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
} = require('../controllers/authController');

const folderName = 'identity-images';

router.post('/register', uploadImageMiddleware(folderName), register);
router.post('/login', login);
router.delete('/logout', authenticateUser, logout);
router.post('/verify-email', verifyEmail);
router.post('/reset-password', resetPassword);
router.post('/forgot-password', forgotPassword);

module.exports = router;
