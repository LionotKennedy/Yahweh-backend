const express = require('express');
const UniverseController = require('../../controllers/contenu/universeController');
const router = express.Router();

// GET /api/v1/Universe - Get all Universe records
router.get('/', UniverseController.getAllUniverse);

// GET /api/v1/Universe/:id - Get Universe record by ID
router.get('/:id', UniverseController.getUniverseById);

// POST /api/v1/Universe - Create new Universe record
router.post('/', UniverseController.createUniverse);

// PUT /api/v1/Universe/:id - Update Universe record
router.put('/:id', UniverseController.updateUniverse);

// DELETE /api/v1/Universe/:id - Delete Universe record
router.delete('/:id', UniverseController.deleteUniverse);

module.exports = router;