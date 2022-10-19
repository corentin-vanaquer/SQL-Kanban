const express = require('express');
const router = express.Router();

// ERROR HANDLER
const controllerHandler = require('../../helpers/controllerHandler');


// CONTROLLER
const listController = require('../../controllers/list');

//~ ---------- GET

// récupérer toutes les listes
router.get('/lists', controllerHandler(listController.findAll));

// récupérer une liste
router.get('/lists/:id', controllerHandler(listController.findOne));

//~ ---------- POST

// créer une nouvelle liste
router.post('/lists', controllerHandler(listController.addOne));

//~ ---------- PATCH

// mettre à jour une liste
router.patch('/lists/:id', controllerHandler(listController.updateOne));

//~ ---------- DELETE   

// supprimer une liste
router.delete('/lists/:id', controllerHandler(listController.deleteOne));



module.exports = router;
