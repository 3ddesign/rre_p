// const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('test\n');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);