require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/****************************
 * Routes existantes
 ****************************/
app.use('/api/home', require('./routes/homeRoutes'));
app.use('/api/gallery', require('./routes/galleryRoutes'));
app.use('/api/sections', require('./routes/sectionRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/menu', require('./routes/menuRoutes'));

// Routes pour contenu
app.use('/api/balance', require('./routes/contenu/balanceRoutes'));
app.use('/api/crucifixion', require('./routes/contenu/crucifixionRoutes'));
app.use('/api/erosion', require('./routes/contenu/erosionRoutes'));
app.use('/api/feasts', require('./routes/contenu/feastsRoutes'));
app.use('/api/nation', require('./routes/contenu/nationRoutes'));
app.use('/api/operation', require('./routes/contenu/operationRoutes'));
app.use('/api/sabbath', require('./routes/contenu/sabbathRoutes'));
app.use('/api/tetragrama', require('./routes/contenu/tetragramaRoutes'));
app.use('/api/universe', require('./routes/contenu/universeRoutes'));
app.use('/api/home-contenu', require('./routes/contenu-home/routes'));

/****************************
 * Nouvelle gestion des utilisateurs
 ****************************/
app.use('/api/auth', require('./routes/authRoutes')); // Routes d'authentification
app.use('/api/users', require('./routes/userRoutes')); // Routes de gestion des utilisateurs


// Remplacez TOUTE la partie gestion des erreurs et 404 par ceci :

/****************************
 * Gestion des erreurs modernisée
 ****************************/
// Middleware pour routes non trouvées
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Endpoint ${req.method} ${req.originalUrl} non trouvé`
  });
});

// Gestionnaire d'erreurs global
app.use((err, req, res, next) => {
  console.error('Erreur:', err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Erreur interne du serveur',
    ...(process.env.NODE_ENV === 'development' && {
      stack: err.stack
    })
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});