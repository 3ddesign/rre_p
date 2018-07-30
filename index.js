const http = require('http');
http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('test\n');
}).listen(8080, '127.0.0.1');


// const app = require('./app');
//


// const express = require('express');
// const app = express();
//
// app.get('/', (req, res) => {
//     res.send({ hi: 'there' });
// });
//
// const PORT = process.env.PORT || 5000;
// // server.listen(PORT);
// app.listen(PORT);