const pool = require('../../config/db');

class Erosion {
  static async findAll() {
    try {
      const result = await pool.query('SELECT * FROM erosion ORDER BY created_at DESC');
      return result.rows;
    } catch (error) {
      throw new Error(`Error fetching erosion records: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const result = await pool.query('SELECT * FROM erosion WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error fetching erosion record: ${error.message}`);
    }
  }

  static async create(data) {
    const { descriptionErosion } = data;
    try {
      const result = await pool.query(
        `INSERT INTO erosion (descriptionErosion) VALUES ($1) RETURNING *`,
        [descriptionErosion]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating erosion record: ${error.message}`);
    }
  }

  static async update(id, data) {
    const { descriptionErosion } = data;
    try {
      const result = await pool.query(
        `UPDATE erosion SET descriptionErosion = $1, updated_at = CURRENT_TIMESTAMP 
         WHERE id = $2 RETURNING *`,
        [descriptionErosion, id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating erosion record: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM erosion WHERE id = $1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error deleting erosion record: ${error.message}`);
    }
  }
}

module.exports = Erosion;