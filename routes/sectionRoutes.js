const express = require('express');
const router = express.Router();
const sectionController = require('../controllers/sectionController');
const upload = require('../config/upload');

router.put('/:section', upload.single('image'), sectionController.updateSectionBackground);
router.post('/:section', upload.single('image'), sectionController.createSectionBackground);
router.get('/', sectionController.getSectionBackgrounds);
router.get('/:section', sectionController.getSectionBackground);

// Nouvelle route pour récupérer par ID
router.get('/id/:id', sectionController.getBackgroundById);

// Routes de modification
// router.post('/:section', upload.single('image'), sectionController.createSectionBackground);
// router.put('/:section', upload.single('image'), sectionController.updateSectionBackground);

router.put('/id/:id', upload.single('image'), sectionController.updateBackgroundById);

module.exports = router;