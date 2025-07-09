const Tetragrama = require("../../models/contenu/Tetragrama");
// const { TetragramaSchema } = require('../validation/schemas');

class TetragramaController {
  static async getAllTetragrama(req, res) {
    try {
      const tetragrama = await Tetragrama.findAll();
      res.json({
        success: true,
        data: tetragrama,
        message: "Tetragrama records retrieved successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getTetragramaById(req, res) {
    try {
      const { id } = req.params;
      const tetragrama = await Tetragrama.findById(id);

      if (!tetragrama) {
        return res.status(404).json({
          success: false,
          message: "Tetragrama record not found",
        });
      }

      res.json({
        success: true,
        data: tetragrama,
        message: "Tetragrama record retrieved successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async createTetragrama(req, res) {
    try {
      const tetragrama = await Tetragrama.create(req.body);
      res.status(201).json({
        success: true,
        data: tetragrama,
        message: "Tetragrama record created successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async updateTetragrama(req, res) {
    try {
      const { id } = req.params;
      const tetragrama = await Tetragrama.update(id, req.body);
      if (!tetragrama) {
        return res.status(404).json({
          success: false,
          message: "Tetragrama record not found",
        });
      }

      res.json({
        success: true,
        data: tetragrama,
        message: "Tetragrama record updated successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async deleteTetragrama(req, res) {
    try {
      const { id } = req.params;
      const tetragrama = await Tetragrama.delete(id);

      if (!tetragrama) {
        return res.status(404).json({
          success: false,
          message: "Tetragrama record not found",
        });
      }

      res.json({
        success: true,
        message: "Tetragrama record deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = TetragramaController;
