const pool = require('../../config/db');

class Crucifixion {
  static async findAll() {
    try {
      const result = await pool.query('SELECT * FROM crucifixion ORDER BY created_at DESC');
      return result.rows;
    } catch (error) {
      throw new Error(`Error fetching crucifixion records: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const result = await pool.query('SELECT * FROM crucifixion WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error fetching crucifixion record: ${error.message}`);
    }
  }

  static async create(data) {
    const { title, descriptions } = data;
    try {
      const result = await pool.query(
        `INSERT INTO crucifixion (title, descriptions) VALUES ($1, $2) RETURNING *`,
        [title, JSON.stringify(descriptions)]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating crucifixion record: ${error.message}`);
    }
  }

  static async update(id, data) {
    const { title, descriptions } = data;
    try {
      const result = await pool.query(
        `UPDATE crucifixion SET title = $1, descriptions = $2, updated_at = CURRENT_TIMESTAMP 
         WHERE id = $3 RETURNING *`,
        [title, JSON.stringify(descriptions), id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating crucifixion record: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM crucifixion WHERE id = $1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error deleting crucifixion record: ${error.message}`);
    }
  }
}

module.exports = Crucifixion;