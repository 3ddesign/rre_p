// const http = require('http');
// const app = require('./app');
//
// const server = http.createServer(app);

const app = require('./app');


const PORT = process.env.PORT || 5000;
// server.listen(PORT);
app.listen(PORT);