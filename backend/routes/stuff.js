const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff');

router.get('/products', stuffCtrl.getAllProducts);
router.post('/products', stuffCtrl.createProduct);
router.get('/products/:id', stuffCtrl.getOneProduct);
router.put('/products/:id', stuffCtrl.updateProduct);
router.patch('/products/:id/price', stuffCtrl.updateProductPrice);
router.delete('/products/:id', stuffCtrl.deleteProduct);

module.exports = router;