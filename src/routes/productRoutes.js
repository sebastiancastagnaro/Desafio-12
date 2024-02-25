

// productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/', productController.createProduct);
router.delete('/:productId', productController.deleteProduct);

module.exports = router;
