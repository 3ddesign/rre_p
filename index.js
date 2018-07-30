const http = require('http');
// http.createServer(function(req, res) {
//
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('test\n');
// }).listen(50, '127.0.0.1');


// const app = require('./app');
//


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('test\n');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);