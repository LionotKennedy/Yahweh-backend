require('dotenv').config();
const db = require("../config/db");
const bcrypt = require('bcryptjs');

async function createAdmin() {
  try {
    const hashedPassword = await bcrypt.hash('admin', 10);

    const result = await db.query(`
      INSERT INTO users (email, password, role, is_active)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (email) DO NOTHING
      RETURNING id
    `, [
      'admin@gmail.com',
      hashedPassword,
      1, // role admin
      true
    ]);

    if (result.rows.length > 0) {
      console.log('✅ Admin créé avec succès');
      console.log(`ID: ${result.rows[0].id}\nEmail: admin@gmail.com\nPassword: admin`);
    } else {
      console.log('ℹ️ Admin existe déjà');
    }
  } catch (error) {
    console.error('❌ Erreur lors de la création admin:', error.message);
  }
}
createAdmin();