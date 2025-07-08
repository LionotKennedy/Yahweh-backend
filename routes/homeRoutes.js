const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const upload = require('../config/upload');

router.put('/banners/:id', upload.single('image'), homeController.updateBanner);
router.post('/banners', upload.single('image'), homeController.createBanner);
router.get('/banners', homeController.getBanners);
router.get('/banners/:id', homeController.getBanner);
// router.put('/book-of-month', upload.single('image'), homeController.updateBookOfMonth);
// router.get('/book-of-month', homeController.getBookOfMonth);

module.exports = router;