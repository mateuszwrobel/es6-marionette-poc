var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
var config = {
	mockDir: __dirname + '/mocks/',
	hostname: process.env.HOSTNAME || 'localhost',
	port: parseInt(process.env.PORT, 10) || 8080
};

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/public/index.html');
});

var server = app.listen(config.port, config.hostname, function() {
	var _host = server.address().address;
	var _port = server.address().port;
	console.log('Example app listening at http://%s:%s', _host, _port);
});