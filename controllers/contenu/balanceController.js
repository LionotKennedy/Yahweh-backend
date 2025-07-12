const Balance = require("../../models/contenu/Balance");
const { balanceSchema } = require('../../validation/schemas');

class BalanceController { 
  static async getAllBalance(req, res) {
    try {
      const balance = await Balance.findAll();
      res.json({
        success: true,
        data: balance,
        message: "Balance records retrieved successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getBalanceById(req, res) {
    try {
      const { id } = req.params;
      const balance = await Balance.findById(id);

      if (!balance) {
        return res.status(404).json({
          success: false,
          message: "Balance record not found",
        });
      }

      res.json({
        success: true,
        data: balance,
        message: "Balance record retrieved successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async createBalance(req, res) {
    try {
      // const { error } = balanceSchema.validate(req.body);
      // if (error) {
      //   return res.status(400).json({
      //     success: false,
      //     message: error.details[0].message
      //   });
      // }

      const balance = await Balance.create(req.body);
      res.status(201).json({
        success: true,
        data: balance,
        message: "Balance record created successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  // static async updateBalance(req, res) {
  //   try {
  //     const { id } = req.params;
  //     const { error } = balanceSchema.validate(req.body);
  //     if (error) {
  //       return res.status(400).json({
  //         success: false,
  //         message: error.details[0].message
  //       });
  //     }

  //     const balance = await Balance.update(id, req.body);
  //     if (!balance) {
  //       return res.status(404).json({
  //         success: false,
  //         message: "Balance record not found",
  //       });
  //     }

  //     res.json({
  //       success: true,
  //       data: balance,
  //       message: "Balance record updated successfully",
  //     });
  //   } catch (error) {
  //     res.status(500).json({
  //       success: false,
  //       message: error.message,
  //     });
  //   }
  // }

  static async updateBalance(req, res) {
  try {
    const { id } = req.params;
    
    // Vérifiez que req.body existe et a des données
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body is empty or missing"
      });
    }

    const balance = await Balance.update(id, req.body);
    
    if (!balance) {
      return res.status(404).json({
        success: false,
        message: "Balance record not found",
      });
    }

    res.json({
      success: true,
      data: balance,
      message: "Balance record updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// static async updateBalance(req, res) {
//   try {
//     const { id } = req.params;
    
//     // Vérification que le corps de la requête existe
//     if (!req.body || Object.keys(req.body).length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "Le corps de la requête ne peut pas être vide"
//       });
//     }

//     const balance = await Balance.update(id, req.body);
    
//     if (!balance) {
//       return res.status(404).json({
//         success: false,
//         message: "Record balance introuvable"
//       });
//     }

//     res.json({
//       success: true,
//       data: balance,
//       message: "Record mis à jour avec succès"
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message
//     });
//   }
// }


// static async updateBalance(req, res) {
//   try {
//     const { id } = req.params;
    
//     titlebalance: "Nouveau Titre Balance";
//     descriptionbalance1: "Nouvelle description 1";
//     descriptionbalance2: "Nouvelle description 2";
//     descriptionbalance3: "Nouvelle description 3";
//     descriptionbalance4: "Nouvelle description 4";
//     // Vérifier si le body contient des données
//     if (!req.body || Object.keys(req.body).length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "No data provided for update"
//       });
//     }

//     const balance = await Balance.update(id, req.body);
//     if (!balance) {
//       return res.status(404).json({
//         success: false,
//         message: "Balance record not found",
//       });
//     }

//     res.json({
//       success: true,
//       data: balance,
//       message: "Balance record updated successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// }


  static async deleteBalance(req, res) {
    try {
      const { id } = req.params;
      const balance = await Balance.delete(id);

      if (!balance) {
        return res.status(404).json({
          success: false,
          message: "Balance record not found",
        });
      }

      res.json({
        success: true,
        message: "Balance record deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = BalanceController;
