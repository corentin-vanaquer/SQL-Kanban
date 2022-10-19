const express = require('express');
const router = express.Router();

// CONTROLLER
const userController = require('../../controllers/user');


//~ ---------- POST

/**
 * réception du formulaire d'inscription
 */
router.post('/subscribe', userController.createUser);

/**
 * réception du formulaire de login
 */
 router.post('/login', userController.login);

 

module.exports = router;
