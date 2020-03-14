const express = require('express');
const app = express();

const gpuRoutes = require('./api/routes/gpus');
const cpuRoutes = require('./api/routes/cpus');

app.use('/gpuscores', gpuRoutes);
app.use('/cpuscores', cpuRoutes);

module.exports = app;