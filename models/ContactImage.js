const pool = require("../config/db");

class ContactImage {
  static async getAllContact() {
    const {
      rows
    } = await pool.query("SELECT * FROM contact_images");
    return rows;
  }

  static async updateContact(id, {
    path,
    alt
  }) {
    const {
      rows
    } = await pool.query(
      "UPDATE contact_images SET path = $1, alt = $2 WHERE id = $3 RETURNING *",
      [path, alt, id]
    );
    return rows[0];
  }
  static async createContact({
    path,
    alt
  }) {
    const {
      rows
    } = await pool.query(
      "INSERT INTO contact_images (path, alt) VALUES ($1, $2) RETURNING *",
      [path, alt]
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