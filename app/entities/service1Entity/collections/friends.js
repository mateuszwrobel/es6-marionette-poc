import Backbone from 'backbone';
import Friend from './../models/friend';

export default class Friends extends Backbone.Collection {
	get model() {
		return Friend;
	}

	constructor(options) {
		super(options)
	}
}
