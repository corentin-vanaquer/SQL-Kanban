const express = require('express');
const router = express.Router();

const apiRouter = require('./api');

// We prefix our api's route
router.use('/api', apiRouter);

module.exports = router;