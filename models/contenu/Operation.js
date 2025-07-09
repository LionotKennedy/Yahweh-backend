const pool = require("../../config/db");

class Operation {
  static async findAll() {
    try {
      const result = await pool.query(
        "SELECT * FROM operation ORDER BY created_at DESC"
      );
      return result.rows;
    } catch (error) {
      throw new Error(`Error fetching operation records: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const result = await pool.query("SELECT * FROM operation WHERE id = $1", [
        id,
      ]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error fetching operation record: ${error.message}`);
    }
  }

  static async create(data) {
    const {
      descriptionOperation1,
      descriptionOperation2,
      descriptionOperation3,
      descriptionOperation4,
    } = data;
    try {
      const result = await pool.query(
        `INSERT INTO operation (descriptionOperation1, descriptionOperation2, descriptionOperation3, descriptionOperation4) 
         VALUES ($1, $2, $3, $4) RETURNING *`,
        [
          descriptionOperation1,
          descriptionOperation2,
          descriptionOperation3,
          descriptionOperation4,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating nation record: ${error.message}`);
    }
  }

  static async update(id, data) {
    const {
      descriptionOperation1,
      descriptionOperation2,
      descriptionOperation3,
      descriptionOperation4,
    } = data;
    try {
      const result = await pool.query(
        `UPDATE operation SET descriptionOperation1 = $1, descriptionOperation2 = $2, descriptionOperation3 = $3, 
         descriptionOperation4 = $4, updated_at = CURRENT_TIMESTAMP 
         WHERE id = $5 RETURNING *`,
        [
          descriptionOperation1,
          descriptionOperation2,
          descriptionOperation3,
          descriptionOperation4,
          id,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating operation record: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query(
        "DELETE FROM operation WHERE id = $1 RETURNING *",
        [id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error deleting operation record: ${error.message}`);
    }
  }
}

module.exports = Operation;
