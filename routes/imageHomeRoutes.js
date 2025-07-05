const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageHomeController');
const upload = require('../config/upload');

router.post('/', upload.single('image'), imageController.uploadImage);
router.put('/:id', upload.single('image'), imageController.updateImage);
router.get('/section/:section', imageController.getImagesBySection);

module.exports = router;