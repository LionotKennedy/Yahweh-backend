const db = require('../config/db');

class Token {
  static async createResetCode(userId, code) {
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes d'expiration
    await db.query(
      'INSERT INTO reset_codes (user_id, code, expires_at) VALUES ($1, $2, $3)',
      [userId, code, expiresAt]
    );
  }

  static async findResetToken(token) {
    const {
      rows
    } = await db.query(
      'SELECT * FROM reset_tokens WHERE token = $1 AND expires_at > NOW()',
      [token]
    );
    return rows[0];
  }

  static async findResetCode(userId, code) {
    const {
      rows
    } = await db.query(
      'SELECT * FROM reset_codes WHERE user_id = $1 AND code = $2 AND expires_at > NOW()',
      [userId, code]
    );
    return rows[0];
  }

  static async deleteResetCode(userId) {
    await db.query('DELETE FROM reset_codes WHERE user_id = $1', [userId]);
  }

}

module.exports = Token;