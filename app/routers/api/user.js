const express = require('express');
const router = express.Router();

// CONTROLLER
const userController = require('../../controllers/user');

//~ ---------- GET

/**
 * route qui vérifie si l'utilisateur est déjà connecté (en cas de refresh de la page)
 */
 router.get('/isconnected', userController.isConnected);


//~ ---------- POST

/**
 * réception du formulaire de login
 */
 router.post('/login', userController.checkPassword);

 /**
  * réception du formulaire d'inscription
  */
 router.post('/subscribe', userController.createUser);
 

module.exports = router;
