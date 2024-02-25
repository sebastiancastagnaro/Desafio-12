

// userModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // Definición del esquema de usuario
});

const User = mongoose.model('User', userSchema);

module.exports = User;
