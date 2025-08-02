const pool = require("../config/db");

class ContactImage {
  static async getAllContact() {
    const {
      rows
    } = await pool.query("SELECT * FROM contact_images");
    return rows;
  }

  static async updateContact(id, {
    // path,
    src,
    alt
  }) {
    const {
      rows
    } = await pool.query(
      // "UPDATE contact_images SET path = $1, alt = $2 WHERE id = $3 RETURNING *",
      // [path, alt, id]
      "UPDATE contact_images SET src = $1, alt = $2 WHERE id = $3 RETURNING *",
      [src, alt, id]
    );
    return rows[0];
  }
  static async createContact({
    // path,
    src,
    alt
  }) {
    const {
      rows
    } = await pool.query(
      // "INSERT INTO contact_images (path, alt) VALUES ($1, $2) RETURNING *",
      // [path, alt]
      "INSERT INTO contact_images (src, alt) VALUES ($1, $2) RETURNING *",
      [src, alt]
    );
    return rows[0];
  }
  static async getByIdContact(id) {
    const {
      rows
    } = await pool.query(
      "SELECT * FROM contact_images WHERE id = $1",
      [id]
    );
    return rows[0];
  }
}

module.exports = ContactImage;