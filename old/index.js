var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const mongoose = require('mongoose');
 
mongoose.connect('mongodb://test:123qweasd@ds219051.mlab.com:19051/addressbook');


var Schema = mongoose.Schema;

var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
  firstname: 'John',
  lastname: 'Doe',
  address: '555 Main St.'
});

// save the user
john.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});

var jane = Person({
  firstname: 'Jane',
  lastname: 'Doe',
  address: '555 Main St.'
});

// save the user
jane.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	
	// get all the users
	Person.find({}, function(err, users) {
		if (err) throw err;
		
		// object of all the users
		console.log(users);
	});
	
	next();
});


// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// var jsonParser = bodyParser.json();

// app.use('/', function (req, res, next) {
// 	console.log('Request Url:' + req.url);
// 	next();
// });

// app.get('/', function(req, res) {
//     var obj = {
//         TEST: 'test',
//     };
//     res.end(JSON.stringify(obj));
// });

// app.get('/person/:id', function(req, res) {
// 	res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
// });
// app.get('/api/person/:id', function(req, res) {
// 	// get that data from database
// 	res.json({ id: req.params.id, firstname: 'John', lastname: 'Doe' });
// });

// app.post('/api/person', jsonParser, function(req, res) {
// 	// save to the database
// });

// app.delete('/api/person/:id', function(req, res) {
// 	// delete from the database
// });

var port = process.env.PORT || 3000;
app.listen(port);