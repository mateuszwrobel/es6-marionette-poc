import app from './../../app';
import CollectionView from './views/collectionView';
import Marionette from 'backbone.marionette';

export default class Main extends Marionette.Object {
	init() {
		app.request('get:service1')
			.done(function(collection) {
				app.modules.vendors.regionManager.get('mainLayout').show(new CollectionView({
					collection: collection
				}));
			});
	}
}
