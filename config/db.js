const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'yahweh_cms',
  password: process.env.DB_PASSWORD || 'lionot',
  port: process.env.DB_PORT || 5432,
});

module.exports = pool;
