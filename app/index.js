import Marionette from 'backbone.marionette';
import Backbone from 'backbone';
import Router from './router';
import app from './app';

import Service1Entity from './entities/service1Entity/index';

import regionManager from './vendors/regions';

Marionette.Renderer.render = function(template, data) {
	return template(data);
};

app.modules = {
	entities: {
		service1Entity: Service1Entity
	},
	vendors: {
		regionManager: regionManager
	}
};

regionManager.addRegion('mainLayout', '#region--main');

app.start();
Backbone.history.start();
