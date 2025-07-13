const pool = require("../../config/db");

class Crucifixion {
  static async findAll() {
    try {
      const result = await pool.query(
        "SELECT * FROM crucifixion ORDER BY created_at DESC"
      );
      return result.rows;
    } catch (error) {
      throw new Error(`Error fetching crucifixion records: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const result = await pool.query(
        "SELECT * FROM crucifixion WHERE id = $1",
        [id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error fetching crucifixion record: ${error.message}`);
    }
  }

  static async create(data) {
    const {
      titleCrucifixion,
      descriptionCrucifixion1,
      descriptionCrucifixion2,
      descriptionCrucifixion3,
      descriptionCrucifixion4,
      descriptionCrucifixion5,
      descriptionCrucifixion6,
      descriptionCrucifixion7,
      descriptionCrucifixion8,
      descriptionCrucifixion9,
      descriptionCrucifixion10,
      descriptionCrucifixion11,
    } = data;
    try {
      const result = await pool.query(
        `INSERT INTO crucifixion (titleCrucifixion, descriptionCrucifixion1,descriptionCrucifixion2,
      descriptionCrucifixion3,
      descriptionCrucifixion4,
      descriptionCrucifixion5,descriptionCrucifixion6,descriptionCrucifixion7,
      descriptionCrucifixion8,descriptionCrucifixion9,descriptionCrucifixion10,
      descriptionCrucifixion11) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
        [
          titleCrucifixion,
          descriptionCrucifixion1,
          descriptionCrucifixion2,
          descriptionCrucifixion3,
          descriptionCrucifixion4,
          descriptionCrucifixion5,
          descriptionCrucifixion6,
          descriptionCrucifixion7,
          descriptionCrucifixion8,
          descriptionCrucifixion9,
          descriptionCrucifixion10,
          descriptionCrucifixion11,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating crucifixion record: ${error.message}`);
    }
  }

  static async update(id, data) {
    const {
      titleCrucifixion,
      descriptionCrucifixion1,
      descriptionCrucifixion2,
      descriptionCrucifixion3,
      descriptionCrucifixion4,
      descriptionCrucifixion5,
      descriptionCrucifixion6,
      descriptionCrucifixion7,
      descriptionCrucifixion8,
      descriptionCrucifixion9,
      descriptionCrucifixion10,
      descriptionCrucifixion11,
    } = data;
    try {
      const result = await pool.query(
        `UPDATE crucifixion SET titleCrucifixion = $1, descriptionCrucifixion1 = $2, descriptionCrucifixion2 = $3, descriptionCrucifixion3 = $4,
        descriptionCrucifixion4 = $5, descriptionCrucifixion5 = $6, descriptionCrucifixion6 = $7, descriptionCrucifixion7 = $8,
        descriptionCrucifixion8 = $9, descriptionCrucifixion9 = $10, descriptionCrucifixion10 = $11, descriptionCrucifixion11 = $12, updated_at = CURRENT_TIMESTAMP 
         WHERE id = $13 RETURNING *`,
        [
          titleCrucifixion,
          descriptionCrucifixion1,
          descriptionCrucifixion2,
          descriptionCrucifixion3,
          descriptionCrucifixion4,
          descriptionCrucifixion5,
          descriptionCrucifixion6,
          descriptionCrucifixion7,
          descriptionCrucifixion8,
          descriptionCrucifixion9,
          descriptionCrucifixion10,
          descriptionCrucifixion11,
          id,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating crucifixion record: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query(
        "DELETE FROM crucifixion WHERE id = $1 RETURNING *",
        [id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error deleting crucifixion record: ${error.message}`);
    }
  }
}

module.exports = Crucifixion;