var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
var hostname = process.env.HOSTNAME || 'localhost';
var port = parseInt(process.env.PORT, 10) || 8080;
var mockDir = __dirname + '/mocks/';

app.use(bodyParser.json());
app.use(express.static('assets'));

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});

var server = app.listen(port, hostname, function() {
	var _host = server.address().address;
	var _port = server.address().port;
	console.log('Example app listening at http://%s:%s', _host, _port);
});