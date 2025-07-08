const pool = require('../../config/db');

class Balance {
  static async findAll() {
    try {
      const result = await pool.query('SELECT * FROM balance ORDER BY created_at DESC');
      return result.rows;
    } catch (error) {
      throw new Error(`Error fetching balance records: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const result = await pool.query('SELECT * FROM balance WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error fetching balance record: ${error.message}`);
    }
  }

  static async create(data) {
    const { title, description1, description2, description3, description4 } = data;
    try {
      const result = await pool.query(
        `INSERT INTO balance (title, description1, description2, description3, description4) 
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [title, description1, description2, description3, description4]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating balance record: ${error.message}`);
    }
  }

  static async update(id, data) {
    const { title, description1, description2, description3, description4 } = data;
    try {
      const result = await pool.query(
        `UPDATE balance SET title = $1, description1 = $2, description2 = $3, 
         description3 = $4, description4 = $5, updated_at = CURRENT_TIMESTAMP 
         WHERE id = $6 RETURNING *`,
        [title, description1, description2, description3, description4, id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating balance record: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM balance WHERE id = $1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error deleting balance record: ${error.message}`);
    }
  }
}

module.exports = Balance;