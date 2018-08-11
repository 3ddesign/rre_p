var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
    var obj = {
        TEST: 'test',
    };
    res.end(JSON.stringify(obj));
});

app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

// app.post('/person', urlencodedParser, function(req, res) {
// 	res.send('Thank you!');
// 	console.log(req.body.firstname);
// 	console.log(req.body.lastname);
// });

app.get('/api/person/:id', function(req, res) {
	// get that data from database
	res.json({ id: req.params.id, firstname: 'John', lastname: 'Doe' });
});

app.post('/api/person', jsonParser, function(req, res) {
	// save to the database
});

app.delete('/api/person/:id', function(req, res) {
	// delete from the database
});

app.listen(port);