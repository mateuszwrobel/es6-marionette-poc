var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var Router = require('./router');

var app = new Marionette.Application();
Backbone.Marionette.Renderer.render = function(template, data) {
	return template(data);
};

window.app = app;
app.on('start', () => {
	Backbone.history.start();
});

app.addRegions({
	mainLayout: '#region--main'
});

app.start();

module.exports = app;