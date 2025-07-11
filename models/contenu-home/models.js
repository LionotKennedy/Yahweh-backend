const pool = require("../../config/db");

class BaseModel {
  constructor(tableName) {
    this.tableName = tableName;
  }

  async findAll() {
    try {
      const result = await pool.query(
        `SELECT * FROM ${this.tableName} ORDER BY id`
      );
      return result.rows;
    } catch (error) {
      throw new Error(`Error fetching ${this.tableName}: ${error.message}`);
    }
  }

  async findById(id) {
    try {
      const result = await pool.query(
        `SELECT * FROM ${this.tableName} WHERE id = $1`,
        [id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Error fetching ${this.tableName} by id: ${error.message}`
      );
    }
  }

  async deleteById(id) {
    try {
      const result = await pool.query(
        `DELETE FROM ${this.tableName} WHERE id = $1 RETURNING *`,
        [id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error deleting ${this.tableName}: ${error.message}`);
    }
  }
}

class ContactModel extends BaseModel {
  constructor() {
    super("contacts");
  }

  async create(data) {
    try {
      const { title, description1, description2, phone, email } = data;
      const result = await pool.query(
        `INSERT INTO contacts (title, description1, description2, phone, email) 
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [title, description1, description2, phone, email]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating contact: ${error.message}`);
    }
  }

  async update(id, data) {
    try {
      const { title, description1, description2, phone, email } = data;
      const result = await pool.query(
        `UPDATE contacts 
         SET title = $1, description1 = $2, description2 = $3, phone = $4, email = $5, updated_at = CURRENT_TIMESTAMP
         WHERE id = $6 RETURNING *`,
        [title, description1, description2, phone, email, id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating contact: ${error.message}`);
    }
  }
}

class CulturalAttireModel extends BaseModel {
  constructor() {
    super("cultural_attire");
  }

  async create(data) {
    try {
      const {
        title,
        description1,
        description2,
        description3,
        description4,
        description5,
      } = data;
      const result = await pool.query(
        `INSERT INTO cultural_attire (title, description1, description2, description3, description4, description5) 
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [
          title,
          description1,
          description2,
          description3,
          description4,
          description5,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating cultural attire: ${error.message}`);
    }
  }

  async update(id, data) {
    try {
      const {
        title,
        description1,
        description2,
        description3,
        description4,
        description5,
      } = data;
      const result = await pool.query(
        `UPDATE cultural_attire 
         SET title = $1, description1 = $2, description2 = $3, description3 = $4, description4 = $5, description5 = $6, updated_at = CURRENT_TIMESTAMP
         WHERE id = $7 RETURNING *`,
        [
          title,
          description1,
          description2,
          description3,
          description4,
          description5,
          id,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating cultural attire: ${error.message}`);
    }
  }
}

class FollowersModel extends BaseModel {
  constructor() {
    super("followers");
  }

  async create(data) {
    try {
      const {
        title,
        description1,
        description2,
        description3,
        description4,
        description5,
      } = data;
      const result = await pool.query(
        `INSERT INTO followers (title, description1, description2, description3, description4, description5) 
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [
          title,
          description1,
          description2,
          description3,
          description4,
          description5,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating follower: ${error.message}`);
    }
  }

  async update(id, data) {
    try {
      const {
        title,
        description1,
        description2,
        description3,
        description4,
        description5,
      } = data;
      const result = await pool.query(
        `UPDATE followers 
         SET title = $1, description1 = $2, description2 = $3, description3 = $4, description4 = $5, description5 = $6, updated_at = CURRENT_TIMESTAMP
         WHERE id = $7 RETURNING *`,
        [
          title,
          description1,
          description2,
          description3,
          description4,
          description5,
          id,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating follower: ${error.message}`);
    }
  }
}

class HomePageModel extends BaseModel {
  constructor() {
    super("home_page");
  }

  async create(data) {
    try {
      const { video_section_title, video_section_content } = data;
      const result = await pool.query(
        `INSERT INTO home_page (video_section_title, video_section_content) 
         VALUES ($1, $2) RETURNING *`,
        [video_section_title, video_section_content]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating home page: ${error.message}`);
    }
  }

  async update(id, data) {
    try {
      const { video_section_title, video_section_content } = data;
      const result = await pool.query(
        `UPDATE home_page 
         SET video_section_title = $1, video_section_content = $2, updated_at = CURRENT_TIMESTAMP
         WHERE id = $3 RETURNING *`,
        [video_section_title, video_section_content, id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating home page: ${error.message}`);
    }
  }

  async findWithVideos(id) {
    try {
      const homePageResult = await pool.query(
        `SELECT * FROM home_page WHERE id = $1`,
        [id]
      );
      if (homePageResult.rows.length === 0) {
        return null;
      }

      const homePage = homePageResult.rows[0];
      const videosResult = await pool.query(
        `SELECT * FROM home_page_videos WHERE home_page_id = $1`,
        [id]
      );

      return {
        ...homePage,
        videos: videosResult.rows,
      };
    } catch (error) {
      throw new Error(`Error fetching home page with videos: ${error.message}`);
    }
  }
}

class HomePageVideoModel extends BaseModel {
  constructor() {
    super("home_page_videos");
  }

  async create(data) {
    try {
      const { home_page_id, src, poster } = data;
      const result = await pool.query(
        `INSERT INTO home_page_videos (home_page_id, src, poster) 
         VALUES ($1, $2, $3) RETURNING *`,
        [home_page_id, src, poster]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating home page video: ${error.message}`);
    }
  }

  async update(id, data) {
    try {
      const { home_page_id, src, poster } = data;
      const result = await pool.query(
        `UPDATE home_page_videos 
         SET home_page_id = $1, src = $2, poster = $3, updated_at = CURRENT_TIMESTAMP
         WHERE id = $4 RETURNING *`,
        [home_page_id, src, poster, id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating home page video: ${error.message}`);
    }
  }

  async findByHomePageId(homePageId) {
    try {
      const result = await pool.query(
        `SELECT * FROM home_page_videos WHERE home_page_id = $1`,
        [homePageId]
      );
      return result.rows;
    } catch (error) {
      throw new Error(
        `Error fetching videos by home page id: ${error.message}`
      );
    }
  }
}

class YahwehModel extends BaseModel {
  constructor() {
    super("yahweh");
  }

  async create(data) {
    try {
      const {
        title1,
        title2,
        description1,
        description2,
        description3,
        description4,
        description5,
        description6,
      } = data;
      const result = await pool.query(
        `INSERT INTO yahweh (title1, title2, description1, description2, description3, description4, description5, description6) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        [
          title1,
          title2,
          description1,
          description2,
          description3,
          description4,
          description5,
          description6,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating yahweh: ${error.message}`);
    }
  }

  async update(id, data) {
    try {
      const {
        title1,
        title2,
        description1,
        description2,
        description3,
        description4,
        description5,
        description6,
      } = data;
      const result = await pool.query(
        `UPDATE yahweh 
         SET title1 = $1, title2 = $2, description1 = $3, description2 = $4, description3 = $5, description4 = $6, description5 = $7, description6 = $8, updated_at = CURRENT_TIMESTAMP
         WHERE id = $9 RETURNING *`,
        [
          title1,
          title2,
          description1,
          description2,
          description3,
          description4,
          description5,
          description6,
          id,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating yahweh: ${error.message}`);
    }
  }
}

class YahwehbenModel extends BaseModel {
  constructor() {
    super("yahweh_ben");
  }

  async create(data) {
    try {
      const {
        title1,
        title2,
        description1,
        description2,
        description3,
        description4,
        description5,
        description6,
        description7,
        description8,
        description9,
      } = data;
      const result = await pool.query(
        `INSERT INTO yahweh_ben (title1, title2, description1, description2, description3, description4, description5, description6, description7, description8, description9) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
        [
          title1,
          title2,
          description1,
          description2,
          description3,
          description4,
          description5,
          description6,
          description7,
          description8,
          description9,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating yahweh ben: ${error.message}`);
    }
  }

  async update(id, data) {
    try {
      const {
        title1,
        title2,
        description1,
        description2,
        description3,
        description4,
        description5,
        description6,
        description7,
        description8,
        description9,
      } = data;
      const result = await pool.query(
        `UPDATE yahweh_ben 
         SET title1 = $1, title2 = $2, description1 = $3, description2 = $4, description3 = $5, description4 = $6, description5 = $7, description6 = $8,
         description7 = $9, description8 = $10, description9 = $11, updated_at = CURRENT_TIMESTAMP
         WHERE id = $9 RETURNING *`,
        [
          title1,
          title2,
          description1,
          description2,
          description3,
          description4,
          description5,
          description6,
          description7,
          description8,
          description9,
          id,
        ]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating yahweh ben: ${error.message}`);
    }
  }
}

module.exports = {
  ContactModel,
  CulturalAttireModel,
  FollowersModel,
  HomePageModel,
  HomePageVideoModel,
  YahwehModel,
  YahwehbenModel,
};
