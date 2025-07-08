const Erosion = require('../../models/Erosion');
const { erosionSchema } = require('../../validation/schemas');

class ErosionController {
  static async getAllErosion(req, res) {
    try {
      const erosion = await Erosion.findAll();
      res.json({
        success: true,
        data: erosion,
        message: 'Erosion records retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async getErosionById(req, res) {
    try {
      const { id } = req.params;
      const erosion = await Erosion.findById(id);
      
      if (!erosion) {
        return res.status(404).json({
          success: false,
          message: 'Erosion record not found'
        });
      }

      res.json({
        success: true,
        data: erosion,
        message: 'Erosion record retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async createErosion(req, res) {
    try {
      const { error } = erosionSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          success: false,
          message: error.details[0].message
        });
      }

      const erosion = await Erosion.create(req.body);
      res.status(201).json({
        success: true,
        data: erosion,
        message: 'Erosion record created successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async updateErosion(req, res) {
    try {
      const { id } = req.params;
      const { error } = erosionSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          success: false,
          message: error.details[0].message
        });
      }

      const erosion = await Erosion.update(id, req.body);
      if (!erosion) {
        return res.status(404).json({
          success: false,
          message: 'Erosion record not found'
        });
      }

      res.json({
        success: true,
        data: erosion,
        message: 'Erosion record updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async deleteErosion(req, res) {
    try {
      const { id } = req.params;
      const erosion = await Erosion.delete(id);
      
      if (!erosion) {
        return res.status(404).json({
          success: false,
          message: 'Erosion record not found'
        });
      }

      res.json({
        success: true,
        message: 'Erosion record deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = ErosionController;