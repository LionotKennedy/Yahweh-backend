const Feasts = require('../../models/contenu/Feasts');
// const { feastsSchema } = require('../../validation/schemas');

class FeastsController {
  static async getAllFeasts(req, res) {
    try {
      const feasts = await Feasts.findAll();
      res.json({
        success: true,
        data: feasts,
        message: 'Feasts records retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async getFeastsById(req, res) {
    try {
      const { id } = req.params;
      const feasts = await Feasts.findById(id);
      
      if (!feasts) {
        return res.status(404).json({
          success: false,
          message: 'Feasts record not found'
        });
      }

      res.json({
        success: true,
        data: feasts,
        message: 'Feasts record retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async createFeasts(req, res) {
    try {
      // const { error } = feastsSchema.validate(req.body);
      // if (error) {
      //   return res.status(400).json({
      //     success: false,
      //     message: error.details[0].message
      //   });
      // }

      const feasts = await Feasts.create(req.body);
      res.status(201).json({
        success: true,
        data: feasts,
        message: 'Feasts record created successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async updateFeasts(req, res) {
    try {
      const { id } = req.params;
      // const { error } = feastsSchema.validate(req.body);
      // if (error) {
      //   return res.status(400).json({
      //     success: false,
      //     message: error.details[0].message
      //   });
      // }

      const feasts = await Feasts.update(id, req.body);
      if (!feasts) {
        return res.status(404).json({
          success: false,
          message: 'Feasts record not found'
        });
      }

      res.json({
        success: true,
        data: feasts,
        message: 'Feasts record updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async deleteFeasts(req, res) {
    try {
      const { id } = req.params;
      const feasts = await Feasts.delete(id);
      
      if (!feasts) {
        return res.status(404).json({
          success: false,
          message: 'Feasts record not found'
        });
      }

      res.json({
        success: true,
        message: 'Feasts record deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = FeastsController;