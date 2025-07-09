const pool = require("../../config/db");

class Sabbath {
  static async findAll() {
    try {
      const result = await pool.query(
        "SELECT * FROM sabbath ORDER BY created_at DESC"
      );
      return result.rows;
    } catch (error) {
      throw new Error(`Error fetching sabbath records: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const result = await pool.query("SELECT * FROM sabbath WHERE id = $1", [
        id,
      ]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error fetching sabbath record: ${error.message}`);
    }
  }

  static async create(data) {
    const {
      titleSabbath,
      descriptionSabbath1,
      descriptionSabbath2,
      descriptionSabbath3,
      descriptionSabbath4,
      descriptionSabbath5,
    } = data;
    try {
      const result = await pool.query(
        `INSERT INTO sabbath (ttitleSabbath, descriptionSabbath1, descriptionSabbath2, descriptionSabbath3
      , descriptionSabbath4, descriptionSabbath5) 
         VALUES ($1, $2, $3, $4, $5, $5, $6) RETURNING *`,
        [
          titleSabbath,
          descriptionSabbath1,
          descriptionSabbath2,
          descriptionSabbath3,
          descriptionSabbath4,
          descriptionSabbath5,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating sabbath record: ${error.message}`);
    }
  }

  static async update(id, data) {
    const {
      titleSabbath,
      descriptionSabbath1,
      descriptionSabbath2,
      descriptionSabbath3,
      descriptionSabbath4,
      descriptionSabbath5,
    } = data;
    try {
      const result = await pool.query(
        `UPDATE sabbath SET titleSabbath = $1, descriptionSabbath1 = $2, descriptionSabbath2 = $3, 
         descriptionSabbath3 = $4, descriptionSabbath4 = $5, descriptionSabbath5 = $6, updated_at = CURRENT_TIMESTAMP 
         WHERE id = $7 RETURNING *`,
        [
          titleSabbath,
          descriptionSabbath1,
          descriptionSabbath2,
          descriptionSabbath3,
          descriptionSabbath4,
          descriptionSabbath5,
          id,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating sabbath record: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query(
        "DELETE FROM sabbath WHERE id = $1 RETURNING *",
        [id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error deleting sabbath record: ${error.message}`);
    }
  }
}

module.exports = Sabbath;
