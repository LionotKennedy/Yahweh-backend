const Nation = require('../models/Nation');
const { nationSchema } = require('../validation/schemas');

class NationController {
  static async getAllNation(req, res) {
    try {
      const nation = await Nation.findAll();
      res.json({
        success: true,
        data: nation,
        message: 'Nation records retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async getNationById(req, res) {
    try {
      const { id } = req.params;
      const nation = await Nation.findById(id);
      
      if (!nation) {
        return res.status(404).json({
          success: false,
          message: 'Nation record not found'
        });
      }

      res.json({
        success: true,
        data: nation,
        message: 'Nation record retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async createNation(req, res) {
    try {
      const { error } = nationSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          success: false,
          message: error.details[0].message
        });
      }

      const nation = await Nation.create(req.body);
      res.status(201).json({
        success: true,
        data: nation,
        message: 'Nation record created successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async updateNation(req, res) {
    try {
      const { id } = req.params;
      const { error } = nationSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          success: false,
          message: error.details[0].message
        });
      }

      const nation = await Nation.update(id, req.body);
      if (!nation) {
        return res.status(404).json({
          success: false,
          message: 'Nation record not found'
        });
      }

      res.json({
        success: true,
        data: nation,
        message: 'Nation record updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async deleteNation(req, res) {
    try {
      const { id } = req.params;
      const nation = await Nation.delete(id);
      
      if (!nation) {
        return res.status(404).json({
          success: false,
          message: 'Nation record not found'
        });
      }

      res.json({
        success: true,
        message: 'Nation record deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = NationController;