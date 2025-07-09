const Universe = require("../../models/contenu/Universe");
// const { UniverseSchema } = require('../../validation/schemas');

class UniverseController {
  static async getAllUniverse(req, res) {
    try {
      const universe = await Universe.findAll();
      res.json({
        success: true,
        data: universe,
        message: "Universe records retrieved successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getUniverseById(req, res) {
    try {
      const { id } = req.params;
      const universe = await Universe.findById(id);

      if (!universe) {
        return res.status(404).json({
          success: false,
          message: "Universe record not found",
        });
      }

      res.json({
        success: true,
        data: universe,
        message: "Universe record retrieved successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async createUniverse(req, res) {
    try {
      const universe = await Universe.create(req.body);
      res.status(201).json({
        success: true,
        data: universe,
        message: "Universe record created successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async updateUniverse(req, res) {
    try {
      const { id } = req.params;
      const universe = await Universe.update(id, req.body);
      if (!universe) {
        return res.status(404).json({
          success: false,
          message: "Universe record not found",
        });
      }

      res.json({
        success: true,
        data: universe,
        message: "Universe record updated successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async deleteUniverse(req, res) {
    try {
      const { id } = req.params;
      const universe = await Universe.delete(id);

      if (!universe) {
        return res.status(404).json({
          success: false,
          message: "Universe record not found",
        });
      }

      res.json({
        success: true,
        message: "Universe record deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = UniverseController;
