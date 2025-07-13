const pool = require("../../config/db");

class Tetragrama {
  static async findAll() {
    try {
      const result = await pool.query(
        "SELECT * FROM tetragrama ORDER BY created_at DESC"
      );
      return result.rows;
    } catch (error) {
      throw new Error(`Error fetching Tetragrama records: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const result = await pool.query(
        "SELECT * FROM tetragrama WHERE id = $1",
        [id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error fetching Tetragrama record: ${error.message}`);
    }
  }

  static async create(data) {
    const {
      title,
      description,
      description2
    } = data;
    try {
      const result = await pool.query(
        `INSERT INTO tetragrama (title, description, description2) 
         VALUES ($1, $2, $3) RETURNING *`,
        [title, description, description2]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating Tetragrama record: ${error.message}`);
    }
  }

  static async update(id, data) {
    const {
      title,
      description,
      description2
    } = data;
    try {
      const result = await pool.query(
        `UPDATE tetragrama SET title = $1, description = $2, description2 = $3, 
         updated_at = CURRENT_TIMESTAMP 
         WHERE id = $4 RETURNING *`,
        [title, description, description2, id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating Tetragrama record: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query(
        "DELETE FROM tetragrama WHERE id = $1 RETURNING *",
        [id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error deleting Tetragrama record: ${error.message}`);
    }
  }
}

module.exports = Tetragrama;