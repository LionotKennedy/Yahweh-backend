const express = require('express');
const NationController = require('../../controllers/contenu/nationController');
const router = express.Router();

// GET /api/v1/nation - Get all nation records
router.get('/', NationController.getAllNation);

// GET /api/v1/nation/:id - Get nation record by ID
router.get('/:id', NationController.getNationById);

// POST /api/v1/nation - Create new nation record
router.post('/', NationController.createNation);

// PUT /api/v1/nation/:id - Update nation record
router.put('/:id', NationController.updateNation);

// DELETE /api/v1/nation/:id - Delete nation record
router.delete('/:id', NationController.deleteNation);

module.exports = router;