

// tokenModel.js

const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    // Definición del esquema de token
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
