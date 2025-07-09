const express = require('express');
const SabbathController = require('../../controllers/contenu/sabbathController');
const router = express.Router();

// GET /api/v1/nation - Get all nation records
router.get('/', SabbathController.getAllSabbath);

// GET /api/v1/nation/:id - Get nation record by ID
router.get('/:id', SabbathController.getSabbathById);

// POST /api/v1/nation - Create new nation record
router.post('/', SabbathController.createSabbath);

// PUT /api/v1/nation/:id - Update nation record
router.put('/:id', SabbathController.updateSabbath);

// DELETE /api/v1/nation/:id - Delete nation record
router.delete('/:id', SabbathController.deleteSabbath);

module.exports = router;