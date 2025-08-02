const pool = require("../config/db");

class SectionBackground {
  static async getBySection(sectionName) {
    const {
      rows
    } = await pool.query(
      "SELECT * FROM section_backgrounds WHERE section = $1",
      [sectionName]
      // "SELECT * FROM section_backgrounds WHERE section_name = $1",
      // [sectionName]
    );
    return rows[0];
  }

  static async update(sectionName, src) {
    const {
      rows
    } = await pool.query(
      `INSERT INTO section_backgrounds (section, src)
       VALUES ($1, $2)
       ON CONFLICT (section) 
       DO UPDATE SET src = $2
       RETURNING *`,
      [sectionName, src]
      // `INSERT INTO section_backgrounds (section_name, path)
      //  VALUES ($1, $2)
      //  ON CONFLICT (section_name) 
      //  DO UPDATE SET path = $2
      //  RETURNING *`,
      // [sectionName, path]
    );
    return rows[0];
  }

  static async create({
    section,
    src
    // section_name,
    // path
  }) {
    const {
      rows
    } = await pool.query(
      "INSERT INTO section_backgrounds (section, src) VALUES ($1, $2) RETURNING *",
      [section, src]
      // "INSERT INTO section_backgrounds (section_name, path) VALUES ($1, $2) RETURNING *",
      // [section_name, path]
    );
    return rows[0];
  }
  static async getAll() {
    const {
      rows
    } = await pool.query("SELECT * FROM section_backgrounds");
    return rows;
  }
  static async getById(id) {
    const {
      rows
    } = await pool.query(
      "SELECT * FROM section_backgrounds WHERE id = $1",
      [id]
    );
    return rows[0];
  }
  static async updateById(id, {
    src,
    section
    // path,
    // section_name
  }) {
    const {
      rows
    } = await pool.query(
      `UPDATE section_backgrounds 
     SET src = $1, section = COALESCE($2, section) 
     WHERE id = $3 RETURNING *`,
      [src, section, id]
      //   `UPDATE section_backgrounds 
      //  SET path = $1, section_name = COALESCE($2, section_name) 
      //  WHERE id = $3 RETURNING *`,
      //   [path, section_name, id]
    );
    return rows[0];
  }
}

module.exports = SectionBackground;