const Sabbath = require("../../models/contenu/Sabbath");
// const { SabbathSchema } = require('../validation/schemas');

class SabbathController {
  static async getAllSabbath(req, res) {
    try {
      const sabbath = await Sabbath.findAll();
      res.json({
        success: true,
        data: sabbath,
        message: "Sabbath records retrieved successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getSabbathById(req, res) {
    try {
      const { id } = req.params;
      const sabbath = await Sabbath.findById(id);

      if (!sabbath) {
        return res.status(404).json({
          success: false,
          message: "Sabbath record not found",
        });
      }

      res.json({
        success: true,
        data: sabbath,
        message: "Sabbath record retrieved successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async createSabbath(req, res) {
    try {
      const sabbath = await Sabbath.create(req.body);
      res.status(201).json({
        success: true,
        data: sabbath,
        message: "Sabbath record created successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async updateSabbath(req, res) {
    try {
      const { id } = req.params;
      const sabbath = await Sabbath.update(id, req.body);
      if (!sabbath) {
        return res.status(404).json({
          success: false,
          message: "Sabbath record not found",
        });
      }

      res.json({
        success: true,
        data: sabbath,
        message: "Sabbath record updated successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async deleteSabbath(req, res) {
    try {
      const { id } = req.params;
      const sabbath = await Sabbath.delete(id);

      if (!sabbath) {
        return res.status(404).json({
          success: false,
          message: "Sabbath record not found",
        });
      }

      res.json({
        success: true,
        message: "Sabbath record deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = SabbathController;
