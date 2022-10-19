const express = require('express');
const router = express.Router();

// Helpers
const { ApiError } = require('../../helpers/errorHandler');

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
router.use(listRouter);
// router.use(cardRouter);
// router.use(labelRouter);
// router.use(assocRouter);

// Use error handler
router.use(() => {
    throw new ApiError('API Route not found', { statusCode: 404 });
});

module.exports = router;