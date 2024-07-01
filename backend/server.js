const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Product = require('./models/product');
const User = require('./models/User');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://chaala:Dawaicha1950@cluster0.mi2918z.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error creating user' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
    res.send({ token });
  } catch (error) {
    res.status(500).send({ message: 'Error logging in' });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const { title, description, imageUrl, userId, price } = req.body;
    const product = new Product({ title, description, imageUrl, userId, price });
    await product.save();
    res.status(201).send({ message: 'Product created successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error creating product' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));