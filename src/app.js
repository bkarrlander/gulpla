var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.header('contentType', 'application/html');
	res.send('<h1>Hello world</h1>');
});

var server = app.listen(3000, function() {
	console.log('Server started.');
});
