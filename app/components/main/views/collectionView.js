import Marionette from 'backbone.marionette';
import ItemView from './itemView';

export default class MainView extends Marionette.CollectionView {

	get childView() {
		return ItemView;
	}
	constructor(options) {
		super(options);
	}

	attributes() {
		return {
			class: 'collection'
		};
	}
}
