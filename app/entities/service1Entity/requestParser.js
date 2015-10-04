import Friends from './collections/friends';
import People from './collections/people';
import _ from 'underscore';

export default class RequestParser {
	constructor(response) {
		this.people = new People();

		response.forEach(responsePerson => {
			let newPerson = this.people.add(_.omit(responsePerson, 'friends'));
			let friends = new Friends(responsePerson.frinds);

			newPerson.set('friends', friends);
		});
	}
}
