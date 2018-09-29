var express = require('express');
var moviesJSON = require('./movies.json');
var app = express();
var mysql = require('mysql');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', function(req, res) {
	res.render('home');
});