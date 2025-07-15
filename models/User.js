const db = require('../config/db');
const bcrypt = require('bcryptjs');
const {
    v4: uuidv4
} = require('uuid');

class User {

    static async create({
        email,
        password,
        first_name,
        last_name,
        phone,
        address
    }) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const {
            rows
        } = await db.query(
            'INSERT INTO users (email, password, first_name, last_name, phone, address) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [email, hashedPassword, first_name, last_name, phone, address]
        );
        return rows[0];
    }

    static async findByEmail(email) {
        const {
            rows
        } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        return rows[0];
    }

    static async findById(id) {
        const {
            rows
        } = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        return rows[0];
    }

    static async updateUserStatus(id, is_active) {
        const {
            rows
        } = await db.query(
            'UPDATE users SET is_active = $1 WHERE id = $2 RETURNING *',
            [is_active, id]
        );
        return rows[0];
    }

    static async getAllClients() {
        const {
            rows
        } = await db.query('SELECT id, email, first_name, last_name, phone, address, is_active, created_at FROM users WHERE role = 0');
        return rows;
    }

    static async updatePassword(id, newPassword) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await db.query('UPDATE users SET password = $1 WHERE id = $2', [hashedPassword, id]);
    }
}

module.exports = User;