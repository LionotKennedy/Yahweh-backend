const express = require("express");
const router = express.Router();
const {
  contactController,
  culturalAttireController,
  followersController,
  homePageController,
  homePageVideoController,
  yahwehController,
  homePageWithVideosController,
  videosByHomePageController,
  yahwehbenController,
} = require("../../controllers/contenu-home/controllers");

// Health check route
router.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "API is running successfully",
    timestamp: new Date().toISOString(),
  });
});

// Contact routes
router.get("/contacts", contactController.getAll);
router.get("/contacts/:id", contactController.getById);
router.post("/contacts", contactController.create);
router.put("/contacts/:id", contactController.update);
router.delete("/contacts/:id", contactController.delete);

// Cultural Attire routes
router.get("/cultural-attire", culturalAttireController.getAll);
router.get("/cultural-attire/:id", culturalAttireController.getById);
router.post("/cultural-attire", culturalAttireController.create);
router.put("/cultural-attire/:id", culturalAttireController.update);
router.delete("/cultural-attire/:id", culturalAttireController.delete);

// Followers routes
router.get("/followers", followersController.getAll);
router.get("/followers/:id", followersController.getById);
router.post("/followers", followersController.create);
router.put("/followers/:id", followersController.update);
router.delete("/followers/:id", followersController.delete);

// Home Page routes
router.get("/home-page", homePageController.getAll);
router.get("/home-page/:id", homePageController.getById);
router.post("/home-page", homePageController.create);
router.put("/home-page/:id", homePageController.update);
router.delete("/home-page/:id", homePageController.delete);

// Special route for home page with videos
router.get(
  "/home-page/:id/with-videos",
  homePageWithVideosController.getWithVideos
);

// Home Page Videos routes
router.get("/home-page-videos", homePageVideoController.getAll);
router.get("/home-page-videos/:id", homePageVideoController.getById);
router.post("/home-page-videos", homePageVideoController.create);
router.put("/home-page-videos/:id", homePageVideoController.update);
router.delete("/home-page-videos/:id", homePageVideoController.delete);

// Get videos by home page id
router.get(
  "/home-page/:homePageId/videos",
  videosByHomePageController.getByHomePageId
);

// Yahweh routes
router.get("/yahweh", yahwehController.getAll);
router.get("/yahweh/:id", yahwehController.getById);
router.post("/yahweh", yahwehController.create);
router.put("/yahweh/:id", yahwehController.update);
router.delete("/yahweh/:id", yahwehController.delete);

// Yahweh ben routes
router.get("/yahweh-ben", yahwehbenController.getAll);
router.get("/yahweh-ben/:id", yahwehbenController.getById);
router.post("/yahweh-ben", yahwehbenController.create);
router.put("/yahweh-ben/:id", yahwehbenController.update);
router.delete("/yahweh-ben/:id", yahwehbenController.delete);

module.exports = router;
