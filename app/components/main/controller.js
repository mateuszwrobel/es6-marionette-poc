var View = require('./view');

var Main = {
	init: () => {
		App.mainLayout.show(new View());
	}
};

module.exports = Main;