const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');

// Middleware
const app = express();
app.use(express.json());

// Connect to MongoDB
const uri = 'mongodb+srv://chaala:Dawaicha1950@cluster0.mi2918z.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(error => console.log('Connexion à MongoDB échouée !', error));

// User signup route
app.use('/api', stuffRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));