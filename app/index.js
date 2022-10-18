const path = require('path');
const express = require('express');
const cors = require('cors');

const router = require('./routers');

const app = express();

// pour parser le payload JSON
app.use(express.json());

// pour parser le payload urlencoded
app.use(express.urlencoded({ extended: true }));

// On lève la restriction CORS pour nos amis React
app.use(cors(process.env.CORS_DOMAINS || '*'));

app.use(router);


module.exports = app;