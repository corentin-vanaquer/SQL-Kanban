const express = require('express');
const router = express.Router();

// ERROR HANDLER
const controllerHandler = require('../../helpers/controllerHandler');


// CONTROLLER
const listController = require('../../controllers/list');

//~ ---------- GET

/**
 * fetch a user lists
 */
router.get('/user/:id/list', controllerHandler(listController.findAll));

//~ ---------- POST

/**
 * create a list
 */
router.post('/user/:id/list', controllerHandler(listController.createList));

//~ ---------- PATCH

/**
 * update a list
 */
router.patch('/user/:id/list', controllerHandler(listController.updateOne));

//~ ---------- DELETE   

/**
 * delete a list
 */
router.delete('/user/:id/list', controllerHandler(listController.deleteOne));



module.exports = router;
