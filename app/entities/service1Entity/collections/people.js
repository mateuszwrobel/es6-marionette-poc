import Backbone from 'backbone';
import Person from './../models/person';

export default class People extends Backbone.Collection {
	get model() {
		return Person;
	}

	constructor(options) {
		super(options)
	}
}
