const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let users = []; // Pour stocker les utilisateurs temporairement

// Route d'inscription
app.post('/api/auth/register', (req, res) => {
    const { email, password } = req.body;
    const user = { id: Date.now(), email, password };
    users.push(user);
    res.status(201).json({ message: 'User registered successfully', user });
});

// Route de connexion
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        res.status(200).json({ message: 'Login successful', user });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});
// Route pour vérifier si un e-mail existe déjà
app.post('/api/auth/check-email', (req, res) => {
    const { email } = req.body;
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        res.status(200).json({ exists: true });
    } else {
        res.status(200).json({ exists: false });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});