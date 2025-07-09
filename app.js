require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});