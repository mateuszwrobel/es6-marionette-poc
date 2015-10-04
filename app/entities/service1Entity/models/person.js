import Backbone from 'backbone';

export default class Person extends Backbone.Model {
	get idAttribute() {
		return '_id';
	}

	constructor(options) {
		super(options)
	}
}
