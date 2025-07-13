const express = require('express');
const router = express.Router();
const sectionMenuController = require('../controllers/sectionMenuImageController');
const upload = require('../config/upload');

router.put('/:section', upload.single('image'), sectionMenuController.updateSectionMenuBackground);
router.post('/:section', upload.single('image'), sectionMenuController.createSectionMenuBackground);
router.get('/', sectionMenuController.getSectionMenuBackgrounds);
router.get('/:section', sectionMenuController.getSectionMenuBackground);

router.get('/id/:id', sectionMenuController.getBackgroundMenuById);

router.put('/id/:id', upload.single('image'), sectionMenuController.updateBackgroundMenuById);

module.exports = router;