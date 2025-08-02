const pool = require("../config/db");

class HomeBanner {
  static async getAll() {
    const {
      rows
    } = await pool.query(
      // "SELECT * FROM home_banners ORDER BY position"
      "SELECT * FROM home_banners ORDER BY sort"
    );
    return rows;
  }

  static async update(id, {
    src,
    alt
    // path,
  }) {
    const {
      rows
    } = await pool.query(
      "UPDATE home_banners SET src = $1, alt = $2 WHERE id = $3 RETURNING *",
      [src, alt, id]
      // "UPDATE home_banners SET path = $1, alt = $2 WHERE id = $3 RETURNING *",
      // [path, alt, id]
    );
    return rows[0];
  }
  static async create({
    src,
    alt,
    sort
    // path,
    // position
  }) {
    const {
      rows
    } = await pool.query(
      "INSERT INTO home_banners (src, alt, sort) VALUES ($1, $2, $3) RETURNING *",
      [src, alt, sort]
      // "INSERT INTO home_banners (path, alt, position) VALUES ($1, $2, $3) RETURNING *",
      // [path, alt, position]
    );
    return rows[0];
  }
  static async getAll() {
    const {
      rows
    } = await pool.query(
      "SELECT * FROM home_banners ORDER BY sort"
      // "SELECT * FROM home_banners ORDER BY position"
    );
    return rows;
  }

  static async getById(id) {
    const {
      rows
    } = await pool.query(
      "SELECT * FROM home_banners WHERE id = $1",
      [id]
    );
    return rows[0];
  }
}

module.exports = HomeBanner;