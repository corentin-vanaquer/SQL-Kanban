const express = require('express');
const router = express.Router();

// ERROR HANDLER
const controllerHandler = require('../../helpers/controllerHandler');

// CONTROLLER
const labelController = require('../../controllers/label');

//~ ---------- GET

// récupérer tous les labels
router.get('/labels', controllerHandler(labelController.findAll));

// récupérer un label
router.get('/labels/:id', controllerHandler(labelController.findOne));

//~ ---------- POST

// ajouter un label
router.post('/labels', controllerHandler(labelController.addOne));


//~ ---------- PATCH

// modifier un label
router.patch('/labels/:id', controllerHandler(labelController.updateOne));

//~ ---------- DELETE

// supprimer un label
router.delete('/labels/:id', controllerHandler(labelController.deleteOne));


module.exports = router;
