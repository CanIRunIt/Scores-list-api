const http = require('http');
const app = require('./app');
const cors = require('cors')

const port = process.env.PORT || 3000;

app.use(cors());

const server = http.createServer(app);


server.listen(port);