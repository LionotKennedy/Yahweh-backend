const pool = require("../config/db");

const createTables = async () => {
  try {
    console.log("🚀 Starting database migration...");

    // Create home table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS homes (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description1 TEXT,
        src1 VARCHAR(500) NOT NULL,
        src2 VARCHAR(500) NOT NULL,
        src3 VARCHAR(500) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ Indexes created successfully!");
  } catch (error) {
    console.error("❌ Error creating tables:", error);
  } finally {
    await pool.end();
  }
};

createTables();
