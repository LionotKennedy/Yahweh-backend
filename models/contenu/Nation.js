const pool = require("../../config/db");

class Nation {
  static async findAll() {
    try {
      const result = await pool.query(
        "SELECT * FROM nation ORDER BY created_at DESC"
      );
      return result.rows;
    } catch (error) {
      throw new Error(`Error fetching nation records: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const result = await pool.query("SELECT * FROM nation WHERE id = $1", [
        id,
      ]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error fetching nation record: ${error.message}`);
    }
  }

  static async create(data) {
    const {
      titleNation,
      descriptionNation,
      descriptionNation2,
      descriptionNation3,
    } = data;
    try {
      const result = await pool.query(
        `INSERT INTO nation (titleNation, descriptionNation, descriptionNation2, descriptionNation3) 
         VALUES ($1, $2, $3, $4) RETURNING *`,
        [titleNation, descriptionNation, descriptionNation2, descriptionNation3]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating nation record: ${error.message}`);
    }
  }

  static async update(id, data) {
    const {
      titleNation,
      descriptionNation,
      descriptionNation2,
      descriptionNation3,
    } = data;
    try {
      const result = await pool.query(
        `UPDATE nation SET titleNation = $1, descriptionNation = $2, descriptionNation2 = $3, 
         descriptionNation3 = $4, updated_at = CURRENT_TIMESTAMP 
         WHERE id = $5 RETURNING *`,
        [
          titleNation,
          descriptionNation,
          descriptionNation2,
          descriptionNation3,
          id,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating nation record: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query(
        "DELETE FROM nation WHERE id = $1 RETURNING *",
        [id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error deleting nation record: ${error.message}`);
    }
  }
}

module.exports = Nation;
