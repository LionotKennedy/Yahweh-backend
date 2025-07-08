const express = require('express');
const FeastsController = require('../../controllers/contenu/feastsController');
const router = express.Router();

// GET /api/v1/feasts - Get all feasts records
router.get('/', FeastsController.getAllFeasts);

// GET /api/v1/feasts/:id - Get feasts record by ID
router.get('/:id', FeastsController.getFeastsById);

// POST /api/v1/feasts - Create new feasts record
router.post('/', FeastsController.createFeasts);

// PUT /api/v1/feasts/:id - Update feasts record
router.put('/:id', FeastsController.updateFeasts);

// DELETE /api/v1/feasts/:id - Delete feasts record
router.delete('/:id', FeastsController.deleteFeasts);

module.exports = router;