const GalleryImage = require("../models/GalleryImage");
const fs = require("fs");
const path = require("path");

exports.updateGalleryImage = async (req, res) => {
  try {
    const { id } = req.params;
    const oldGallery = await GalleryImage.getById(id);

    const updatedImage = await GalleryImage.update(id, {
      path: `/uploads/${req.file.filename}`,
      alt: req.body.alt,
    });
    // Supprime l'ancienne image si elle existe
    if (oldGallery && oldGallery.path) {
      const oldPath = path.join(__dirname, "..", oldGallery.path);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }
    res.json(updatedImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createGalleryImage = async (req, res) => {
  try {
    const newImage = await GalleryImage.create({
      path: `/uploads/${req.file.filename}`,
      alt: req.body.alt || "New Gallery Image",
    });
    res.status(201).json(newImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getGalleryImages = async (req, res) => {
  try {
    const images = await GalleryImage.getAll();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getGalleryImage = async (req, res) => {
  try {
    const image = await GalleryImage.getById(req.params.id);
    if (!image) return res.status(404).json({ message: "Image non trouvée" });
    res.json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
