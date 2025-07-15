const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {
    authenticate,
    checkRole
} = require('../middleware/auth');

// Admin seulement
router.get('/clients', authenticate, checkRole(1), userController.getAllClients);
router.put('/clients/:id/status', authenticate, checkRole(1), userController.updateUserStatus);

module.exports = router;