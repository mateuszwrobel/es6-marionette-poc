import Marionette from 'backbone.marionette';
import template from './../templates/item.hbs';

export default class ItemView extends Marionette.ItemView {

	get template() {
		return template
	}

	constructor(options) {
		super(options);
	}

	attributes() {
		return {
			class: 'item'
		};
	}
}
