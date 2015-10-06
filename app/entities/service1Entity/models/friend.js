import Backbone from 'backbone';

export default class Friend extends Backbone.Model {
	get idAttribute() {
		return 'id';
	}

	constructor(options) {
		super(options)
	}
}
