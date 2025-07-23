const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'yahweh_cms',
  password: process.env.DB_PASSWORD || 'lionot',
  port: process.env.DB_PORT || 5432,
});

module.exports = pool;


// const mysql = require('mysql2/promise'); // Utilisez 'mysql2/promise' pour le support async/await

// const pool = mysql.createPool({
//   user: process.env.DB_USER || 'root', // 'root' est l'utilisateur par défaut de MySQL
//   host: process.env.DB_HOST || 'localhost',
//   database: process.env.DB_NAME || 'yahweh_cms',
//   password: process.env.DB_PASSWORD || '', // Mot de passe MySQL
//   port: process.env.DB_PORT || 3306, // Port par défaut de MySQL
//   // waitForConnections: true, // Options supplémentaires pour le pool
//   // connectionLimit: 10,
//   // queueLimit: 0
// });

// module.exports = pool;