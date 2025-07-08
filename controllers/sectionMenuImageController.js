const SectionMenuBackground = require("../models/SectionMenuImage");
const fs = require("fs");
const path = require("path");

const SECTION_NAMES = {
  TETRAGRAMMATION: "Tetragrammaton",
  THE_NATION_OF_YAHWEH: "The_Nation_of_Yahweh",
  THE_UNIVERSE_OF_YAHWEH: "The_Universe_of_Yahweh",
  THE_FEASTS_OF_YAHWEH: "The_Feasts_of_Yahweh",
  THE_GOOD_NEWS_OF_YAHWEH: "The_Good_News_of_Yahweh",
  THE_CRUCIFIXION: "The_Crucifixion",
  SHOCKING_REVELATIONS: "Shocking_Revelations",
  THE_SABBATH: "The_Sabbath",
  EROSION_OF_THE_CONSTITUTION: "Erosion_of_The_Constitution",
  OPERATION_WORD_WAR: "Operation_Word_War",
  OPERATION_WORD_WAR_2: "Operation_Word_War_2",
  BALANCE_JUSTICE: "Balance_Justice",
};
exports.updateSectionMenuBackground = async (req, res) => {
  try {
    const { section } = req.params;
    const validSection = SECTION_NAMES[section.toUpperCase()];

    if (!validSection) {
      return res.status(400).json({ message: "Section invalide" });
    }

    // Récupère l'ancien background
    const oldBackground = await SectionMenuBackground.getBySection(
      validSection
    );

    const updatedBackground = await SectionMenuBackground.update(
      validSection,
      `/uploads/${req.file.filename}`
    );

    // Supprime l'ancienne image
    if (oldBackground && oldBackground.path) {
      const oldPath = path.join(__dirname, "..", oldBackground.path);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    res.json(updatedBackground);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSectionMenuBackground = async (req, res) => {
  try {
    const { section } = req.params;
    const validSection = SECTION_NAMES[section.toUpperCase()];

    if (!validSection) {
      return res.status(400).json({ message: "Section invalide" });
    }

    const newBackground = await SectionMenuBackground.create({
      section_name: validSection,
      path: `/uploads/${req.file.filename}`,
    });

    res.status(201).json(newBackground);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getSectionMenuBackgrounds = async (req, res) => {
  try {
    const backgrounds = await SectionMenuBackground.getAll();
    res.json(backgrounds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSectionMenuBackground = async (req, res) => {
  try {
    const { section } = req.params;
    const background = await SectionMenuBackground.getBySection(section);
    if (!background)
      return res.status(404).json({ message: "Section non trouvée" });
    res.json(background);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getBackgroundMenuById = async (req, res) => {
  try {
    const background = await SectionMenuBackground.getById(req.params.id);
    if (!background) {
      return res.status(404).json({ message: "Background non trouvé" });
    }
    res.json(background);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBackgroundMenuById = async (req, res) => {
  try {
    // Récupère l'ancien background
    const oldBackground = await SectionMenuBackground.getById(req.params.id);

    const updatedData = {
      path: `/uploads/${req.file.filename}`,
      ...(req.body.section_name && { section_name: req.body.section_name }),
    };

    const updatedBg = await SectionMenuBackground.updateById(
      req.params.id,
      updatedData
    );

    // Supprime l'ancienne image
    if (oldBackground && oldBackground.path) {
      const oldPath = path.join(__dirname, "..", oldBackground.path);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    res.json(updatedBg);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
