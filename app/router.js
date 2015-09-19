var app = require('./index');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var main = require('./components/main/controller');

var Router = Marionette.AppRouter.extend({
	appRoutes: {
		'': 'showIndex'
	}
});

var controller = {
	showIndex: function() {
		main.init();
	}
};

new Router({
	controller: controller
});