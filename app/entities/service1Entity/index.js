import $ from 'jquery';

import app from './../../app';

import Friends from './collections/friends';
import People from './collections/people';
import Friend from './models/Friend';
import Person from './models/Person';

import RequestParser from './requestParser';

app.reqres.setHandler('get:service1', function() {
	var deferred = $.Deferred();

	$.getJSON('/service1').done(function(response) {
		let parser = new RequestParser(response);

		deferred.resolve(parser.people);
	});

	return deferred.promise();
});

export default {
	'Friends': Friends,
	'People': People,
	'Friend': Friend,
	'Person': Person
}
