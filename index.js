const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.write('Hello world !');
    res.end();
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});