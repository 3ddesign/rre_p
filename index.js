// const http = require('http');
// const app = require('./app');
//
// const server = http.createServer(app);

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'test' });
});

const PORT = process.env.PORT || 5000;
// server.listen(PORT);
app.listen(PORT);