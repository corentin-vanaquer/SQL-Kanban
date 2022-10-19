const express = require('express');
const router = express.Router();

// ERROR HANDLER
const controllerHandler = require('../../helpers/controllerHandler');

// CONTROLLER
const assocController = require('../../controllers/assoc');

//~ ---------- GET

// récupérer toutes les cartes d'une liste
router.get('/lists/:id/cards', controllerHandler(assocController.findCardsByList));


//~ ---------- POST

// associer un label à une carte
router.post('/cards/:id/label', controllerHandler(assocController.associate));


//~ ---------- DELETE

// dissocier un label d'une carte
router.delete('/cards/:card_id/label/:label_id', controllerHandler(assocController.dissociate));


module.exports = router;
