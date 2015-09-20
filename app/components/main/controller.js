var app = require('./../../app');
var View = require('./view');

var Main = {
	init: () => {
		app.mainLayout.show(new View());
	}
};

module.exports = Main;