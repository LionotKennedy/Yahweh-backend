const express = require('express');
const CrucifixionController = require('../../controllers/contenu/crucifixionController');
const router = express.Router();

// GET /api/v1/crucifixion - Get all crucifixion records
router.get('/', CrucifixionController.getAllCrucifixion);

// GET /api/v1/crucifixion/:id - Get crucifixion record by ID
router.get('/:id', CrucifixionController.getCrucifixionById);

// POST /api/v1/crucifixion - Create new crucifixion record
router.post('/', CrucifixionController.createCrucifixion);

// PUT /api/v1/crucifixion/:id - Update crucifixion record
router.put('/:id', CrucifixionController.updateCrucifixion);

// DELETE /api/v1/crucifixion/:id - Delete crucifixion record
router.delete('/:id', CrucifixionController.deleteCrucifixion);

module.exports = router;