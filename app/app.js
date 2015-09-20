var Marionette = require('backbone.marionette');

var app = new Marionette.Application({
	regions: {
		mainLayout: '#region--main'
	}
});

module.exports = app;