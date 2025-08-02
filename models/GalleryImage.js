const pool = require("../config/db");

class GalleryImage {
  static async getAll() {
    const {
      rows
    } = await pool.query(
      "SELECT * FROM gallery_images ORDER BY id"
    );
    return rows;
  }

  static async update(id, {
    src,
    // path,
    alt
  }) {
    const {
      rows
    } = await pool.query(
      // "UPDATE gallery_images SET path = $1, alt = $2 WHERE id = $3 RETURNING *",
      // [path, alt, id]
      "UPDATE gallery_images SET src = $1, alt = $2 WHERE id = $3 RETURNING *",
      [src, alt, id]
    );
    return rows[0];
  }
  static async create({
    // path,
    src,
    alt
  }) {
    const {
      rows
    } = await pool.query(
      "INSERT INTO gallery_images (src, alt) VALUES ($1, $2) RETURNING *",
      [src, alt]
      // "INSERT INTO gallery_images (path, alt) VALUES ($1, $2) RETURNING *",
      // [path, alt]
    );
    return rows[0];
  }
  static async getAll() {
    const {
      rows
    } = await pool.query(
      "SELECT * FROM gallery_images ORDER BY id"
    );
    return rows;
  }

  static async getById(id) {
    const {
      rows
    } = await pool.query(
      "SELECT * FROM gallery_images WHERE id = $1",
      [id]
    );
    return rows[0];
  }
}

module.exports = GalleryImage;