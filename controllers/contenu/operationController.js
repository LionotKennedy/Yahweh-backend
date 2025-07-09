const Operation = require("../../models/contenu/Operation");
// const { nationSchema } = require('../validation/schemas');

class OperationController {
  static async getAllOperation(req, res) {
    try {
      const operation = await Operation.findAll();
      res.json({
        success: true,
        data: operation,
        message: "Operation records retrieved successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getOperationById(req, res) {
    try {
      const { id } = req.params;
      const operation = await Operation.findById(id);

      if (!operation) {
        return res.status(404).json({
          success: false,
          message: "Operation record not found",
        });
      }

      res.json({
        success: true,
        data: operation,
        message: "Operation record retrieved successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async createOperation(req, res) {
    try {
      const operation = await Operation.create(req.body);
      res.status(201).json({
        success: true,
        data: operation,
        message: "Operation record created successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async updateOperation(req, res) {
    try {
      const { id } = req.params;
      const operation = await Operation.update(id, req.body);
      if (!operation) {
        return res.status(404).json({
          success: false,
          message: "Operation record not found",
        });
      }

      res.json({
        success: true,
        data: operation,
        message: "Operation record updated successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async deleteOperation(req, res) {
    try {
      const { id } = req.params;
      const operation = await Operation.delete(id);

      if (!operation) {
        return res.status(404).json({
          success: false,
          message: "Operation record not found",
        });
      }

      res.json({
        success: true,
        message: "Operation record deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = OperationController;
