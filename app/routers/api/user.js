const express = require('express');
const router = express.Router();

// CONTROLLER
const userController = require('../../controllers/user');


//~ ---------- POST

/**
 * Signing up
 */
router.post('/subscribe', userController.createUser);

/**
 * Login
 */
 router.post('/login', userController.login);

 

module.exports = router;
