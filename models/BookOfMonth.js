const pool = require("../config/db");

class BookOfMonth {
  static async get() {
    const { rows } = await pool.query("SELECT * FROM book_of_month LIMIT 1");
    return rows[0];
  }

  static async update(path, alt) {
    const { rows } = await pool.query(
      `INSERT INTO book_of_month (path, alt)
       VALUES ($1, $2)
       ON CONFLICT (id) 
       DO UPDATE SET path = $1, alt = $2
       RETURNING *`,
      [path, alt]
    );
    return rows[0];
  }
  static async get() {
    const { rows } = await pool.query("SELECT * FROM book_of_month LIMIT 1");
    return rows[0];
  }
}

module.exports = BookOfMonth;
