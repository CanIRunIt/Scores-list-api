var express = require('express');
var app = express();
var cors = require('cors')

app.use(cors())

const gpuRoutes = require('./api/routes/gpus');
const cpuRoutes = require('./api/routes/cpus');
const ramRoutes = require('./api/routes/rams');
/* 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*'
    );
    /* if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    } */
   /*  next()
})

app.options('/url...', function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header("Access-Control-Allow-Headers", "accept, content-type");
    res.header("Access-Control-Max-Age", "1728000");
    return res.sendStatus(200);
 }); */ 

app.use('/gpuscores', gpuRoutes);
app.use('/cpuscores', cpuRoutes);
app.use('/ramscores', ramRoutes);
/* app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }); */

module.exports = app;