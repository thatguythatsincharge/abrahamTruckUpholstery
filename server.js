var express = require('express');
var moviesJSON = require('./movies.json');
var app = express();
var mysql = require('mysql');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', function(req, res) {
	res.render('home');
});

port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function() {
	if (port= process.env.PORT) {
		console.log('The application is running on the port');
	}else if (port=3000) {
		console.log("The application is running on port 3000");
	}else{
		console.log("The application is not running on process.env.PORT or port 3000 - Go check whats wrong");
	}
});