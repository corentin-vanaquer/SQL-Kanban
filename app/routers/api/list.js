const express = require('express');
const router = express.Router();

// CONTROLLER
const listController = require('../../controllers/list');

//~ ---------- GET

// récupérer toutes les listes
router.get('/lists', listController.findAll);

// récupérer une liste
router.get('/lists/:id', listController.findOne);

//~ ---------- POST

// créer une nouvelle liste
router.post('/lists', listController.addOne);

//~ ---------- PATCH

// mettre à jour une liste
router.patch('/lists/:id', listController.updateOne);

//~ ---------- DELETE   

// supprimer une liste
router.delete('/lists/:id', listController.deleteOne);



module.exports = router;
