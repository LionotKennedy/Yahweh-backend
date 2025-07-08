const pool = require('../../config/db');

class Feasts {
  static async findAll() {
    try {
      const result = await pool.query('SELECT * FROM feasts ORDER BY created_at DESC');
      return result.rows;
    } catch (error) {
      throw new Error(`Error fetching feasts records: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const result = await pool.query('SELECT * FROM feasts WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error fetching feasts record: ${error.message}`);
    }
  }

  static async create(data) {
    const { title, content } = data;
    try {
      const result = await pool.query(
        `INSERT INTO feasts (title, content) VALUES ($1, $2) RETURNING *`,
        [title, JSON.stringify(content)]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating feasts record: ${error.message}`);
    }
  }

  static async update(id, data) {
    const { title, content } = data;
    try {
      const result = await pool.query(
        `UPDATE feasts SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP 
         WHERE id = $3 RETURNING *`,
        [title, JSON.stringify(content), id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating feasts record: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM feasts WHERE id = $1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error deleting feasts record: ${error.message}`);
    }
  }
}

module.exports = Feasts;