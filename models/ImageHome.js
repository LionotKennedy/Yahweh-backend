const pool = require('../config/db');

class ImageHome {
  static async create(imageData) {
    const { path, alt, section } = imageData;
    const query = `
      INSERT INTO images (path, alt, section)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [path, alt, section];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async update(id, imageData) {
    const { path, alt } = imageData;
    const query = `
      UPDATE images
      SET path = $1, alt = $2, updated_at = NOW()
      WHERE id = $3
      RETURNING *;
    `;
    const values = [path, alt, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async findBySection(section) {
    const query = 'SELECT * FROM images WHERE section = $1';
    const { rows } = await pool.query(query, [section]);
    return rows;
  }
}

module.exports = ImageHome;