

// productModel.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    // Definición del esquema de producto
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
