const pool = require("../config/db");

const seedData = async () => {
  try {
    console.log("🌱 Starting database seeding...");

    // Seed contacts
    const homeData = {
      title: "home page",
      description1: "P.E.E.S.S. Foundation, 1777 NE Loop 410, Suite 600, San Antonio, TX 78217",
      src1: "https://ms.yahwehbenyahweh.com/video/720/2025_FeastThemeVideo_New.mp4",
      src2: "https://ms.yahwehbenyahweh.com/video/720/Good_News_Commercial.mp4",
      src3: "https://ms.yahwehbenyahweh.com/video/720/Home_Page_Promo.mp4",
    };

    await pool.query(
      `
      INSERT INTO homes (title, description1, src1, src2, src3)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT DO NOTHING
    `,
      [
        homeData.title,
        homeData.description1,
        homeData.src1,
        homeData.src2,
        homeData.src3,
      ]
    );

    console.log("✅ All data seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
  } finally {
    await pool.end();
  }
};

seedData();