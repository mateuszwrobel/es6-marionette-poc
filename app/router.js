import Marionette from 'backbone.marionette';
import Main from './components/main/controller';

var Router = Marionette.AppRouter.extend({
	appRoutes: {
		'': 'showIndex'
	}
});

var controller = {
	showIndex: function() {
		let main = new Main();
		main.init();
	}
};

export default new Router({
	controller: controller
});
