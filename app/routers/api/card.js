const express = require('express');
const router = express.Router();

// ERROR HANDLER
const controllerHandler = require('../../helpers/controllerHandler');

// CONTROLLER
const cardController = require('../../controllers/card');

//~ ---------- GET

// récupérer toutes les cartes
router.get('/cards', controllerHandler(cardController.findAll));


// récupérer une carte
router.get('/cards/:id', controllerHandler(cardController.findOne));

//~ ---------- POST

// ajouter une carte
router.post('/cards', controllerHandler(cardController.createCard));

//~ ---------- PATCH

// modifier une carte
router.patch('/cards/:id', controllerHandler(cardController.updateOne));

//~ ---------- DELETE

// supprimer une carte
router.delete('/cards/:id', controllerHandler(cardController.deleteOne));


module.exports = router;
