const SectionBackground = require("../models/SectionBackground");
const fs = require("fs");
const path = require("path");

const SECTION_NAMES = {
  BOOKS: "books",
  ABOUT_YAHWEH: "about_yahweh",
  ABOUT_YAHWEH_BEN: "about_yahweh_ben",
  FOLLOWERS: "followers",
  CULTURAL: "cultural",
};

exports.updateSectionBackground = async (req, res) => {
  try {
    const { section } = req.params;
    const validSection = SECTION_NAMES[section.toUpperCase()];

    if (!validSection) {
      return res.status(400).json({ message: "Section invalide" });
    }

    const updatedBackground = await SectionBackground.update(
      validSection,
      `/uploads/${req.file.filename}`
    );

    res.json(updatedBackground);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSectionBackground = async (req, res) => {
  try {
    const { section } = req.params;
    const validSection = SECTION_NAMES[section.toUpperCase()];

    if (!validSection) {
      return res.status(400).json({ message: "Section invalide" });
    }

    const newBackground = await SectionBackground.create({
      section_name: validSection,
      path: `/uploads/${req.file.filename}`,
    });

    res.status(201).json(newBackground);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getSectionBackgrounds = async (req, res) => {
  try {
    const backgrounds = await SectionBackground.getAll();
    res.json(backgrounds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSectionBackground = async (req, res) => {
  try {
    const { section } = req.params;
    const background = await SectionBackground.getBySection(section);
    if (!background)
      return res.status(404).json({ message: "Section non trouvée" });
    res.json(background);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getBackgroundById = async (req, res) => {
  try {
    const background = await SectionBackground.getById(req.params.id);
    if (!background) {
      return res.status(404).json({ message: "Background non trouvé" });
    }
    res.json(background);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.updateBackgroundById = async (req, res) => {
  try {
    const updatedData = {
      path: `/uploads/${req.file.filename}`,
      ...(req.body.section_name && { section_name: req.body.section_name }),
    };

    const updatedBg = await SectionBackground.updateById(
      req.params.id,
      updatedData
    );
    res.json(updatedBg);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
