const express = require('express');
const router = express.Router();

// CONTROLLER
const cardController = require('../../controllers/card');

//~ ---------- GET

// récupérer toutes les cartes
router.get('/cards', cardController.findAll);


// récupérer une carte
router.get('/cards/:id', cardController.findOne);

//~ ---------- POST

// ajouter une carte
router.post('/cards', cardController.createCard);

//~ ---------- PATCH

// modifier une carte
router.patch('/cards/:id', cardController.updateOne);

//~ ---------- DELETE

// supprimer une carte
router.delete('/cards/:id', cardController.deleteOne);


module.exports = router;
