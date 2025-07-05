const HomeBanner = require("../models/HomeBanner");
const BookOfMonth = require("../models/BookOfMonth");
const fs = require("fs");
const path = require("path");

exports.updateBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBanner = await HomeBanner.update(id, {
      path: `/uploads/${req.file.filename}`,
      alt: req.body.alt,
    });
    res.json(updatedBanner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBookOfMonth = async (req, res) => {
  try {
    const updatedBook = await BookOfMonth.update(1, {
      // ID fixe car une seule image
      path: `/uploads/${req.file.filename}`,
      alt: req.body.alt,
    });
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBanner = async (req, res) => {
  try {
    const newBanner = await HomeBanner.create({
      path: `/uploads/${req.file.filename}`,
      alt: req.body.alt || "New Banner",
      position: req.body.position || 0,
    });
    res.status(201).json(newBanner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBanners = async (req, res) => {
  try {
    const banners = await HomeBanner.getAll();
    res.json(banners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBanner = async (req, res) => {
  try {
    const banner = await HomeBanner.getById(req.params.id);
    if (!banner)
      return res.status(404).json({ message: "Bannière non trouvée" });
    res.json(banner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBookOfMonth = async (req, res) => {
  try {
    const book = await BookOfMonth.get();
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
