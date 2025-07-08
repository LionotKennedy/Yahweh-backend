const pool = require("../config/db");

class SectionMenuImage {
  static async getBySection(sectionName) {
    const { rows } = await pool.query(
      "SELECT * FROM section_menus WHERE section_name = $1",
      [sectionName]
    );
    return rows[0];
  }

  static async update(sectionName, path) {
    const { rows } = await pool.query(
      `INSERT INTO section_menus (section_name, path)
       VALUES ($1, $2)
       ON CONFLICT (section_name) 
       DO UPDATE SET path = $2
       RETURNING *`,
      [sectionName, path]
    );
    return rows[0];
  }

  static async create({ section_name, path }) {
    const { rows } = await pool.query(
      "INSERT INTO section_menus (section_name, path) VALUES ($1, $2) RETURNING *",
      [section_name, path]
    );
    return rows[0];
  }
  static async getAll() {
    const { rows } = await pool.query("SELECT * FROM section_menus");
    return rows;
  }
  static async getById(id) {
    const { rows } = await pool.query(
      "SELECT * FROM section_menus WHERE id = $1",
      [id]
    );
    return rows[0];
  }
  static async updateById(id, { path, section_name }) {
    const { rows } = await pool.query(
      `UPDATE section_menus 
     SET path = $1, section_name = COALESCE($2, section_name) 
     WHERE id = $3 RETURNING *`,
      [path, section_name, id]
    );
    return rows[0];
  }
}

module.exports = SectionMenuImage;
