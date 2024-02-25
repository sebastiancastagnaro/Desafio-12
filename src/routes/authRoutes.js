

// authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/reset-password', authController.resetPassword);
router.put('/change-role/:userId', authController.changeUserRole);

module.exports = router;
