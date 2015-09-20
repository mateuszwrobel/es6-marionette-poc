var Marionette = require('backbone.marionette');
var template = require('./template.hbs');

var MainView = Marionette.ItemView.extend({

	template: template,
	className: 'main--component'

});

module.exports = MainView;