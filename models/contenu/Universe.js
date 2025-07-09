const pool = require("../../config/db");

class Universe {
  static async findAll() {
    try {
      const result = await pool.query(
        "SELECT * FROM universe ORDER BY created_at DESC"
      );
      return result.rows;
    } catch (error) {
      throw new Error(`Error fetching Universe records: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const result = await pool.query("SELECT * FROM universe WHERE id = $1", [
        id,
      ]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error fetching Universe record: ${error.message}`);
    }
  }

  static async create(data) {
    const {
      descriptionUniverse1,
      descriptionUniverse2,
      descriptionUniverse3,
      descriptionUniverse4,
      videoLinkUniverse,
    } = data;
    try {
      const result = await pool.query(
        `INSERT INTO universe (descriptionUniverse1, descriptionUniverse2, descriptionUniverse3, descriptionUniverse4, videoLinkUniverse) 
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [
          descriptionUniverse1,
          descriptionUniverse2,
          descriptionUniverse3,
          descriptionUniverse4,
          videoLinkUniverse,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating Universe record: ${error.message}`);
    }
  }

  static async update(id, data) {
    const {
      descriptionUniverse1,
      descriptionUniverse2,
      descriptionUniverse3,
      descriptionUniverse4,
      videoLinkUniverse,
    } = data;
    try {
      const result = await pool.query(
        `UPDATE universe SET videoLinkUniverse = $5, descriptionUniverse1 = $1, descriptionUniverse2 = $2, 
         descriptionUniverse3 = $3, descriptionUniverse4 = $4, updated_at = CURRENT_TIMESTAMP 
         WHERE id = $6 RETURNING *`,
        [
          descriptionUniverse1,
          descriptionUniverse2,
          descriptionUniverse3,
          descriptionUniverse4,
          videoLinkUniverse,
          id,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating Universe record: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query(
        "DELETE FROM universe WHERE id = $1 RETURNING *",
        [id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error deleting Universe record: ${error.message}`);
    }
  }
}

module.exports = Universe;
