const Product = require('../models/product');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createProduct = async (req, res) => {
  try {
    const { title, description, imageUrl, userId, price } = req.body;
    const product = new Product({ title, description, imageUrl, userId, price });
    await product.save();
    res.status(201).send({ message: 'Product created successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error creating product' });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching products' });
  }
};

exports.getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching product' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, imageUrl, userId, price } = req.body;
    const product = await Product.findByIdAndUpdate(id, { title, description, imageUrl, userId, price }, { new: true, runValidators: true });
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(200).send({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(500).send({ message: 'Error updating product' });
  }
};

exports.updateProductPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;
    const product = await Product.findByIdAndUpdate(id, { price }, { new: true, runValidators: true });
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(200).send({ message: 'Product price updated successfully', product });
  } catch (error) {
    res.status(500).send({ message: 'Error updating product price' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(200).send({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting product' });
  }
};