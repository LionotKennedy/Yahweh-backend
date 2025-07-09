const pool = require("../../config/db");

class Feasts {
  static async findAll() {
    try {
      const result = await pool.query(
        "SELECT * FROM feasts ORDER BY created_at DESC"
      );
      return result.rows;
    } catch (error) {
      throw new Error(`Error fetching feasts records: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const result = await pool.query("SELECT * FROM feasts WHERE id = $1", [
        id,
      ]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error fetching feasts record: ${error.message}`);
    }
  }

  static async create(data) {
    const {
      titleFeasts,
      titleFeasts2,
      fieldFeasts2,
      titleFeasts3,
      fieldFeasts3,
      titleFeasts4,
      fieldFeasts4,
      descriptionFeasts4,
      videoFeasts4,
      titleFeasts5,
      fieldFeasts5,
      descriptionFeasts5,
      videoFeasts5,
      titleFeasts6,
      fieldFeasts6a,
      fieldFeasts6b,
    } = data;
    try {
      const result = await pool.query(
        `INSERT INTO feasts (
        titleFeasts, 
      titleFeasts2,
      fieldFeasts2, 
      titleFeasts3,
      fieldFeasts3,
      titleFeasts4,
      fieldFeasts4,
      descriptionFeasts4,
      videoFeasts4,
      titleFeasts5,
      fieldFeasts5,
      descriptionFeasts5,
      videoFeasts5,
      titleFeasts6,
      fieldFeasts6a,
      fieldFeasts6b
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *`,
        [
          titleFeasts,
          titleFeasts2,
          fieldFeasts2,
          titleFeasts3,
          fieldFeasts3,
          titleFeasts4,
          fieldFeasts4,
          descriptionFeasts4,
          videoFeasts4,
          titleFeasts5,
          fieldFeasts5,
          descriptionFeasts5,
          videoFeasts5,
          titleFeasts6,
          fieldFeasts6a,
          fieldFeasts6b,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating feasts record: ${error.message}`);
    }
  }

  static async update(id, data) {
    const {
      titleFeasts,
      titleFeasts2,
      fieldFeasts2,
      titleFeasts3,
      fieldFeasts3,
      titleFeasts4,
      fieldFeasts4,
      descriptionFeasts4,
      videoFeasts4,
      titleFeasts5,
      fieldFeasts5,
      descriptionFeasts5,
      videoFeasts5,
      titleFeasts6,
      fieldFeasts6a,
      fieldFeasts6b,
    } = data;
    try {
      const result = await pool.query(
        `UPDATE feasts SET titleFeasts = $1, titleFeasts2 = $2, fieldFeasts2 = $3, titleFeasts3 = $4, fieldFeasts3 = $5, titleFeasts4 = $6,
        fieldFeasts4 = $7, descriptionFeasts4 = $8, videoFeasts4 = $9, titleFeasts5 = $10, fieldFeasts5 = $11, descriptionFeasts5 = $12,
        videoFeasts5 = $13, titleFeasts6 = $14, fieldFeasts6a = $15, fieldFeasts6b = $16, updated_at = CURRENT_TIMESTAMP 
         WHERE id = $17 RETURNING *`,
        [
          titleFeasts,
          titleFeasts2,
          fieldFeasts2,
          titleFeasts3,
          fieldFeasts3,
          titleFeasts4,
          fieldFeasts4,
          descriptionFeasts4,
          videoFeasts4,
          titleFeasts5,
          fieldFeasts5,
          descriptionFeasts5,
          videoFeasts5,
          titleFeasts6,
          fieldFeasts6a,
          fieldFeasts6b,
          id,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating feasts record: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query(
        "DELETE FROM feasts WHERE id = $1 RETURNING *",
        [id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error deleting feasts record: ${error.message}`);
    }
  }
}

module.exports = Feasts;
