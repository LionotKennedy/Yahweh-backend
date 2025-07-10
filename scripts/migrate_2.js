const pool = require("../config/db");

const migrations = [
  `
    CREATE TABLE IF NOT EXISTS balance (
      id SERIAL PRIMARY KEY,
      titleBalance VARCHAR(255) NOT NULL,
      descriptionBalance1 TEXT NOT NULL,
      descriptionBalance2 TEXT NOT NULL,
      descriptionBalance3 TEXT NOT NULL,
      descriptionBalance4 TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      `,
  `
      CREATE TABLE IF NOT EXISTS crucifixion (
        id SERIAL PRIMARY KEY,
        titleCrucifixion VARCHAR(255) NOT NULL,
        descriptionCrucifixion1 TEXT NOT NULL,
        descriptionCrucifixion2 TEXT NOT NULL,
        descriptionCrucifixion3 TEXT NOT NULL,
        descriptionCrucifixion4 TEXT NOT NULL,
        descriptionCrucifixion5 TEXT NOT NULL,
        descriptionCrucifixion6 TEXT NOT NULL,
        descriptionCrucifixion7 TEXT NOT NULL,
        descriptionCrucifixion8 TEXT NOT NULL,
        descriptionCrucifixion9 TEXT NOT NULL,
        descriptionCrucifixion10 TEXT NOT NULL,
        descriptionCrucifixion11 TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `,
  `
    CREATE TABLE IF NOT EXISTS erosion (
      id SERIAL PRIMARY KEY,
      descriptionErosion TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      `,
  `
      CREATE TABLE IF NOT EXISTS feasts (
        id SERIAL PRIMARY KEY,
        titleFeasts VARCHAR(255) NOT NULL,
      titleFeasts2 VARCHAR(255) NOT NULL,
      fieldFeasts2 VARCHAR(255) NOT NULL,
      titleFeasts3 VARCHAR(255) NOT NULL,
      fieldFeasts3 VARCHAR(255) NOT NULL,
      titleFeasts4 VARCHAR(255) NOT NULL,
      fieldFeasts4 VARCHAR(255) NOT NULL,
      descriptionFeasts4 TEXT NOT NULL,
      videoFeasts4 VARCHAR(255) NOT NULL,
      titleFeasts5 VARCHAR(255) NOT NULL,
      fieldFeasts5 VARCHAR(255) NOT NULL,
      descriptionFeasts5 TEXT NOT NULL,
      videoFeasts5 VARCHAR(255) NOT NULL,
      titleFeasts6 VARCHAR(255) NOT NULL,
      fieldFeasts6a VARCHAR(255) NOT NULL,
      fieldFeasts6b VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `,
  `
    CREATE TABLE IF NOT EXISTS nation (
      id SERIAL PRIMARY KEY,
      titleNation VARCHAR(255) NOT NULL,
      descriptionNation TEXT NOT NULL,
      descriptionNation2 TEXT NOT NULL,
      descriptionNation3 TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      `,
  `
      CREATE TABLE IF NOT EXISTS operation (
        id SERIAL PRIMARY KEY,
        descriptionOperation1 TEXT NOT NULL,
        descriptionOperation2 TEXT NOT NULL,
        descriptionOperation3 TEXT NOT NULL,
        descriptionOperation4 TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `,
  `
        CREATE TABLE IF NOT EXISTS sabbath (
          id SERIAL PRIMARY KEY,
          titleSabbath VARCHAR(255) NOT NULL,
          descriptionSabbath1 TEXT NOT NULL,
          descriptionSabbath2 TEXT NOT NULL,
          descriptionSabbath3 TEXT NOT NULL,
          descriptionSabbath4 TEXT NOT NULL,
          descriptionSabbath5 TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `,
  `
  CREATE TABLE IF NOT EXISTS tetragrama (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    description2 TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `,
  `
      CREATE TABLE IF NOT EXISTS universe (
          id SERIAL PRIMARY KEY,
            descriptionUniverse1 TEXT NOT NULL,
            descriptionUniverse2 TEXT NOT NULL,
            descriptionUniverse3 TEXT NOT NULL,
            descriptionUniverse4 TEXT NOT NULL,
            videoLinkUniverse TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `,
];

async function runMigrations() {
  try {
    console.log("🔄 Running database migrations...");

    for (const migration of migrations) {
      await pool.query(migration);
    }

    console.log("✅ Database migrations completed successfully!");
  } catch (error) {
    console.error("❌ Migration failed:", error);
  } finally {
    process.exit();
  }
}

runMigrations();

// CREATE TABLE IF NOT EXISTS crucifixion (
//     id SERIAL PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     descriptions JSONB NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//   );
