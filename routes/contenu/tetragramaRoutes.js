const express = require('express');
const TetragramaController = require('../../controllers/contenu/tetragramaController');
const router = express.Router();

// GET /api/v1/Tetragrama - Get all Tetragrama records
router.get('/', TetragramaController.getAllTetragrama);

// GET /api/v1/Tetragrama/:id - Get Tetragrama record by ID
router.get('/:id', TetragramaController.getTetragramaById);

// POST /api/v1/Tetragrama - Create new Tetragrama record
router.post('/', TetragramaController.createTetragrama);

// PUT /api/v1/Tetragrama/:id - Update Tetragrama record
router.put('/:id', TetragramaController.updateTetragrama);

// DELETE /api/v1/Tetragrama/:id - Delete Tetragrama record
router.delete('/:id', TetragramaController.deleteTetragrama);

module.exports = router;