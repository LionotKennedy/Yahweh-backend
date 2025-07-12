const pool = require("../config/db");

const createTables = async () => {
  try {
    console.log("🚀 Starting database migration...");

    // Create contacts table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description1 TEXT,
        description2 TEXT,
        phone VARCHAR(50),
        email VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Create cultural_attire table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS cultural_attire (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description1 TEXT,
        description2 TEXT,
        description3 TEXT,
        description4 TEXT,
        description5 TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Create followers table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS followers (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description1 TEXT,
        description2 TEXT,
        description3 TEXT,
        description4 TEXT,
        description5 TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Create home_page table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS home_page (
        id SERIAL PRIMARY KEY,
        video_section_title VARCHAR(255),
        video_section_content TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `);
        // src VARCHAR(500) NOT NULL,
        // poster VARCHAR(500),

    // Create home_page_videos table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS home_page_videos (
        id SERIAL PRIMARY KEY,
        home_page_id INTEGER REFERENCES home_page(id) ON DELETE CASCADE,
        src VARCHAR(500) NOT NULL,
        poster VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Create yahweh table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS yahweh (
        id SERIAL PRIMARY KEY,
        title1 VARCHAR(255),
        title2 VARCHAR(255),
        description1 TEXT,
        description2 TEXT,
        description3 TEXT,
        description4 TEXT,
        description5 TEXT,
        description6 TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Create yahweh ben yahweh table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS yahweh_ben (
        id SERIAL PRIMARY KEY,
        title1 VARCHAR(255),
        title2 VARCHAR(255),
        description1 TEXT,
        description2 TEXT,
        description3 TEXT,
        description4 TEXT,
        description5 TEXT,
        description6 TEXT,
        description7 TEXT,
        description8 TEXT,
        description9 TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ All tables created successfully!");

    // Create indexes for better performance
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
      CREATE INDEX IF NOT EXISTS idx_home_page_videos_home_page_id ON home_page_videos(home_page_id);
      `);

    console.log("✅ Indexes created successfully!");
  } catch (error) {
    console.error("❌ Error creating tables:", error);
  } finally {
    await pool.end();
  }
};

createTables();
