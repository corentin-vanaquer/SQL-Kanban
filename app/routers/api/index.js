const express = require('express');
const router = express.Router();

// Default prefixing API's route,
router.all('/');

// Import all router files
const userRouter = require('./user');
const cardRouter = require('./card');
const listRouter = require('./list');
const labelRouter = require('./label');
const assocRouter = require('./assoc');

// Use all router files
router.use(userRouter);
// router.use(cardRouter);
// router.use(listRouter);
// router.use(labelRouter);
// router.use(assocRouter);

module.exports = router;