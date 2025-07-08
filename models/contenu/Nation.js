const pool = require('../../config/db');

class Nation {
  static async findAll() {
    try {
      const result = await pool.query('SELECT * FROM nation ORDER BY created_at DESC');
      return result.rows;
    } catch (error) {
      throw new Error(`Error fetching nation records: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const result = await pool.query('SELECT * FROM nation WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error fetching nation record: ${error.message}`);
    }
  }

  static async create(data) {
    const { title, description1, description2, description3 } = data;
    try {
      const result = await pool.query(
        `INSERT INTO nation (title, description1, description2, description3) 
         VALUES ($1, $2, $3, $4) RETURNING *`,
        [title, description1, description2, description3]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating nation record: ${error.message}`);
    }
  }

  static async update(id, data) {
    const { title, description1, description2, description3 } = data;
    try {
      const result = await pool.query(
        `UPDATE nation SET title = $1, description1 = $2, description2 = $3, 
         description3 = $4, updated_at = CURRENT_TIMESTAMP 
         WHERE id = $5 RETURNING *`,
        [title, description1, description2, description3, id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating nation record: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM nation WHERE id = $1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error deleting nation record: ${error.message}`);
    }
  }
}

module.exports = Nation;