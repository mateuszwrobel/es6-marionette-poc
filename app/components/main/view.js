var Marionette = require('backbone.marionette');
var template = require('./template.hbs');

class MainView extends Marionette.ItemView {
	constructor(...rest) {
		super(...rest);
		this.template = template;
		this.className = 'main--component';
	}
};

module.exports = MainView;