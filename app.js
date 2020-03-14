const express = require('express');
const app = express();

const gpuRoutes = require('./api/routes/gpus');

app.use('/gpuscores', gpuRoutes);

module.exports = app;