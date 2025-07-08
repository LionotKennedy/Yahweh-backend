const Image = require("./ImageHome");
const fs = require("fs");
const path = require("path");

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Aucun fichier téléchargé" });
    }

    const imageData = {
      path: `/uploads/${req.file.filename}`,
      alt: req.body.alt || req.file.originalname,
      section: req.body.section,
    };

    const newImage = await Image.create(imageData);
    res.status(201).json(newImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findById(id);

    if (!image) {
      return res.status(404).json({ message: "Image non trouvée" });
    }

    let imagePath = image.path;

    if (req.file) {
      // Supprimer l'ancienne image
      const oldImagePath = path.join(__dirname, "..", image.path);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      imagePath = `/uploads/${req.file.filename}`;
    }

    const updatedData = {
      path: imagePath,
      alt: req.body.alt || image.alt,
    };

    const updatedImage = await Image.update(id, updatedData);
    res.json(updatedImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getImagesBySection = async (req, res) => {
  try {
    const { section } = req.params;
    const images = await Image.findBySection(section);
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
