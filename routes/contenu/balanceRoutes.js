const express = require('express');
const BalanceController = require('../../controllers/contenu/balanceController');
const router = express.Router();

// GET /api/v1/balance - Get all balance records
router.get('/', BalanceController.getAllBalance);

// GET /api/v1/balance/:id - Get balance record by ID
router.get('/:id', BalanceController.getBalanceById);

// POST /api/v1/balance - Create new balance record
router.post('/', BalanceController.createBalance);

// PUT /api/v1/balance/:id - Update balance record
router.put('/:id', BalanceController.updateBalance);

// DELETE /api/v1/balance/:id - Delete balance record
router.delete('/:id', BalanceController.deleteBalance);

module.exports = router; 