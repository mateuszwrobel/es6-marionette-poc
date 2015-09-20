var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var Router = require('./router');
var app = require('./app');

Backbone.Marionette.Renderer.render = function(template, data) {
	return template(data);
};

app.start();
Backbone.history.start();