

// authController.js

const User = require('../models/userModel');
const Token = require('../models/tokenModel');
const emailService = require('../utils/emailService');
const generateToken = require('../utils/generateToken');

exports.resetPassword = async (req, res) => {
    // Lógica para restablecer la contraseña
};

exports.changeUserRole = async (req, res) => {
    // Lógica para cambiar el rol de un usuario
};
