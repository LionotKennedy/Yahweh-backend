const { 
  ContactModel, 
  CulturalAttireModel, 
  FollowersModel, 
  HomePageModel, 
  HomePageVideoModel, 
  YahwehModel 
} = require('../../models/contenu-home/models');

const contactModel = new ContactModel();
const culturalAttireModel = new CulturalAttireModel();
const followersModel = new FollowersModel();
const homePageModel = new HomePageModel();
const homePageVideoModel = new HomePageVideoModel();
const yahwehModel = new YahwehModel();

const createController = (model) => ({
  // GET all
  getAll: async (req, res) => {
    try {
      const data = await model.findAll();
      res.json({
        success: true,
        data: data
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  },

  // GET by id
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await model.findById(id);
      
      if (!data) {
        return res.status(404).json({
          success: false,
          error: 'Resource not found'
        });
      }

      res.json({
        success: true,
        data: data
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  },

  // POST create
  create: async (req, res) => {
    try {
      const data = await model.create(req.body);
      res.status(201).json({
        success: true,
        data: data
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  },

  // PUT update
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await model.update(id, req.body);
      
      if (!data) {
        return res.status(404).json({
          success: false,
          error: 'Resource not found'
        });
      }

      res.json({
        success: true,
        data: data
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  },

  // DELETE
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await model.deleteById(id);
      
      if (!data) {
        return res.status(404).json({
          success: false,
          error: 'Resource not found'
        });
      }

      res.json({
        success: true,
        message: 'Resource deleted successfully',
        data: data
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }
});

// Create controllers for each model
const contactController = createController(contactModel);
const culturalAttireController = createController(culturalAttireModel);
const followersController = createController(followersModel);
const homePageController = createController(homePageModel);
const homePageVideoController = createController(homePageVideoModel);
const yahwehController = createController(yahwehModel);

// Special controller for home page with videos
const homePageWithVideosController = {
  getWithVideos: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await homePageModel.findWithVideos(id);
      
      if (!data) {
        return res.status(404).json({
          success: false,
          error: 'Home page not found'
        });
      }

      res.json({
        success: true,
        data: data
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }
};

// Controller for managing videos by home page
const videosByHomePageController = {
  getByHomePageId: async (req, res) => {
    try {
      const { homePageId } = req.params;
      const data = await homePageVideoModel.findByHomePageId(homePageId);
      
      res.json({
        success: true,
        data: data
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }
};

module.exports = {
  contactController,
  culturalAttireController,
  followersController,
  homePageController,
  homePageVideoController,
  yahwehController,
  homePageWithVideosController,
  videosByHomePageController
};