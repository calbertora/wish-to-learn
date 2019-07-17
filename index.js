const http = require('http');
const app = require('./server/index');
const db = require('./database/connection');

db.connect;
const server = http.createServer(app);