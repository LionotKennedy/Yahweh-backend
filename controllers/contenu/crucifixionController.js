const Crucifixion = require('../../models/contenu/Crucifixion');
const { crucifixionSchema } = require('../../validation/schemas');

class CrucifixionController {
  static async getAllCrucifixion(req, res) {
    try {
      const crucifixion = await Crucifixion.findAll();
      res.json({
        success: true,
        data: crucifixion,
        message: 'Crucifixion records retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async getCrucifixionById(req, res) {
    try {
      const { id } = req.params;
      const crucifixion = await Crucifixion.findById(id);
      
      if (!crucifixion) {
        return res.status(404).json({
          success: false,
          message: 'Crucifixion record not found'
        });
      }

      res.json({
        success: true,
        data: crucifixion,
        message: 'Crucifixion record retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async createCrucifixion(req, res) {
    try {
      // const { error } = crucifixionSchema.validate(req.body);
      // if (error) {
      //   return res.status(400).json({
      //     success: false,
      //     message: error.details[0].message
      //   });
      // }

      const crucifixion = await Crucifixion.create(req.body);
      res.status(201).json({
        success: true,
        data: crucifixion,
        message: 'Crucifixion record created successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
  
  static async updateCrucifixion(req, res) {
    try {
      const { id } = req.params;
      // const { error } = crucifixionSchema.validate(req.body);
      // if (error) {
      //   return res.status(400).json({
      //     success: false,
      //     message: error.details[0].message
      //   });
      // }
      // Vérifiez que req.body existe et a des données
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body is empty or missing"
      });
    }

      const crucifixion = await Crucifixion.update(id, req.body);
      if (!crucifixion) {
        return res.status(404).json({
          success: false,
          message: 'Crucifixion record not found'
        });
      }

      res.json({
        success: true,
        data: crucifixion,
        message: 'Crucifixion record updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async deleteCrucifixion(req, res) {
    try {
      const { id } = req.params;
      const crucifixion = await Crucifixion.delete(id);
      
      if (!crucifixion) {
        return res.status(404).json({
          success: false,
          message: 'Crucifixion record not found'
        });
      }

      res.json({
        success: true,
        message: 'Crucifixion record deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = CrucifixionController;