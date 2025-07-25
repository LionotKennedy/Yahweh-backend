const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Routes correctement formatées
router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);
router.post('/logout', authController.logout);

module.exports = router;