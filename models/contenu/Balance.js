const pool = require("../../config/db");

class Balance {
  static async findAll() { 
    try {
      const result = await pool.query(
        "SELECT * FROM balance ORDER BY created_at DESC"
      );
      return result.rows;
    } catch (error) {
      throw new Error(`Error fetching balance records: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const result = await pool.query("SELECT * FROM balance WHERE id = $1", [
        id,
      ]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error fetching balance record: ${error.message}`);
    }
  }

  static async create(data) {
    const {
      titlebalance,
      descriptionbalance1,
      descriptionbalance2,
      descriptionbalance3,
      descriptionbalance4,
    } = data;
    try {
      const result = await pool.query(
        `INSERT INTO balance (titlebalance, descriptionbalance1, descriptionbalance2, descriptionbalance3, descriptionbalance4) 
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [
          titlebalance,
          descriptionbalance1,
          descriptionbalance2,
          descriptionbalance3,
          descriptionbalance4,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating balance record: ${error.message}`);
    }
  }

  static async update(id, data) {
    const {
      titlebalance,
      descriptionbalance1,
      descriptionbalance2,
      descriptionbalance3,
      descriptionbalance4,
    } = data;
  //      const titlebalance= "Nouveau Titre Balance";
  //  const descriptionbalance1= "Nouvelle description 1";
  //  const descriptionbalance2= "Nouvelle description 2";
  // const  descriptionbalance3= "Nouvelle description 3";
  // const  descriptionbalance4= "Nouvelle description 4";
    try {
      const result = await pool.query(
        `UPDATE balance SET titlebalance = $1, descriptionbalance1 = $2, descriptionbalance2 = $3, 
         descriptionbalance3 = $4, descriptionbalance4 = $5, updated_at = CURRENT_TIMESTAMP 
         WHERE id = $6 RETURNING *`,
        [
          titlebalance,
          descriptionbalance1,
          descriptionbalance2,
          descriptionbalance3,
          descriptionbalance4,
          id,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating balance record: ${error.message}`);
    }
  }

//   static async update(id, data) {
//   // Validation des données requises
//   const requiredFields = [
//     'titlebalance',
//     'descriptionbalance1',
//     'descriptionbalance2',
//     'descriptionbalance3',
//     'descriptionbalance4'
//   ];

//   // Vérification que toutes les propriétés sont présentes
//   const missingFields = requiredFields.filter(field => !data[field]);
  
//   if (missingFields.length > 0) {
//     throw new Error(`Les champs suivants sont requis : ${missingFields.join(', ')}`);
//   }

//   try {
//     const result = await pool.query(
//       `UPDATE balance SET 
//          titlebalance = $1,
//          descriptionbalance1 = $2,
//          descriptionbalance2 = $3,
//          descriptionbalance3 = $4,
//          descriptionbalance4 = $5,
//          updated_at = CURRENT_TIMESTAMP 
//        WHERE id = $6 RETURNING *`,
//       [
//         data.titlebalance,
//         data.descriptionbalance1,
//         data.descriptionbalance2,
//         data.descriptionbalance3,
//         data.descriptionbalance4,
//         id
//       ]
//     );

//     return result.rows[0];
//   } catch (error) {
//     throw new Error(`Erreur lors de la mise à jour du record : ${error.message}`);
//   }
// }

// static async update(id, data) {
//   // Vérifier si data existe
//   if (!data) {
//     throw new Error('No data provided for update');
//   }

//   const {
//     titlebalance,
//     descriptionbalance1,
//     descriptionbalance2,
//     descriptionbalance3,
//     descriptionbalance4,
//   } = data;

//   try {
//     const result = await pool.query(
//       `UPDATE balance SET titlebalance = $1, descriptionbalance1 = $2, descriptionbalance2 = $3, 
//        descriptionbalance3 = $4, descriptionbalance4 = $5, updated_at = CURRENT_TIMESTAMP 
//        WHERE id = $6 RETURNING *`,
//       [
//         titlebalance,
//         descriptionbalance1,
//         descriptionbalance2,
//         descriptionbalance3,
//         descriptionbalance4,
//         id,
//       ]
//     );
//     return result.rows[0];
//   } catch (error) {
//     throw new Error(`Error updating balance record: ${error.message}`);
//   }
// }


  static async delete(id) {
    try {
      const result = await pool.query(
        "DELETE FROM balance WHERE id = $1 RETURNING *",
        [id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error deleting balance record: ${error.message}`);
    }
  }
}

module.exports = Balance;
