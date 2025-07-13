const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const upload = require("../config/upload");

router.put(
  "/:id",
  upload.single("image"),
  contactController.updateContact
);
router.post(
  "/",
  upload.single("image"),
  contactController.createContact
);
router.get("/", contactController.getAllContact);
router.get("/:id", contactController.getByIdContact);

module.exports = router;