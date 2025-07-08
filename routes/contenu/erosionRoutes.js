const express = require('express');
const ErosionController = require('../../controllers/contenu//erosionController');
const router = express.Router();

// GET /api/v1/erosion - Get all erosion records
router.get('/', ErosionController.getAllErosion);

// GET /api/v1/erosion/:id - Get erosion record by ID
router.get('/:id', ErosionController.getErosionById);

// POST /api/v1/erosion - Create new erosion record
router.post('/', ErosionController.createErosion);

// PUT /api/v1/erosion/:id - Update erosion record
router.put('/:id', ErosionController.updateErosion);

// DELETE /api/v1/erosion/:id - Delete erosion record
router.delete('/:id', ErosionController.deleteErosion);

module.exports = router;