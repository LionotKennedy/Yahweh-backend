const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');
const upload = require('../config/upload');

router.put('/:id', upload.single('image'), galleryController.updateGalleryImage);
router.post('/', upload.single('image'), galleryController.createGalleryImage);
router.get('/', galleryController.getGalleryImages);
router.get('/:id', galleryController.getGalleryImage);

module.exports = router;