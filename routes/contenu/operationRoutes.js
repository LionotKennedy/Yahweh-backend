const express = require('express');
const OperationController = require('../../controllers/contenu/operationController');
const router = express.Router();

// GET /api/v1/nation - Get all nation records
router.get('/', OperationController.getAllOperation);

// GET /api/v1/nation/:id - Get nation record by ID
router.get('/:id', OperationController.getOperationById);

// POST /api/v1/nation - Create new nation record
router.post('/', OperationController.createOperation);

// PUT /api/v1/nation/:id - Update nation record
router.put('/:id', OperationController.updateOperation);

// DELETE /api/v1/nation/:id - Delete nation record
router.delete('/:id', OperationController.deleteOperation);

module.exports = router;