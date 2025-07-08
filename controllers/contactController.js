const ContactImage = require("../models/ContactImage");
const fs = require("fs");
const path = require("path");

exports.updateContact = async (req, res) => {
  try {
    const { id } = req.params;

    const oldContact = await ContactImage.getByIdContact(id);

    const updatedContact = await ContactImage.updateContact(id, {
      path: `/uploads/${req.file.filename}`,
      alt: req.body.alt || "Update Contact",
    });
    // Supprime l'ancienne image si elle existe
    if (oldContact && oldContact.path) {
      const oldPath = path.join(__dirname, "..", oldContact.path);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    res.json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createContact = async (req, res) => {
  try {
    const newContact = await ContactImage.createContact({
      path: `/uploads/${req.file.filename}`,
      alt: req.body.alt || "New contact",
      // position: req.body.position || 0,
    });
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllContact = async (req, res) => {
  try {
    const contacts = await ContactImage.getAllContact();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getByIdContact = async (req, res) => {
  try {
    const contact = await ContactImage.getByIdContact(req.params.id);
    if (!contact)
      return res.status(404).json({ message: "Contact non trouvée" });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
