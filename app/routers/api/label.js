const express = require('express');
const router = express.Router();

// CONTROLLER
const labelController = require('../../controllers/label');

//~ ---------- GET

// récupérer tous les labels
router.get('/labels', labelController.findAll);

// récupérer un label
router.get('/labels/:id', labelController.findOne);

//~ ---------- POST

// ajouter un label
router.post('/labels', labelController.addOne);


//~ ---------- PATCH

// modifier un label
router.patch('/labels/:id', labelController.updateOne);

//~ ---------- DELETE

// supprimer un label
router.delete('/labels/:id', labelController.deleteOne);


module.exports = router;
