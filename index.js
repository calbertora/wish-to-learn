const http = require('http');
const app = require('./server/index');

const server = http.createServer(app);