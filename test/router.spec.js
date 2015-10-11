import router from './../app/router';

import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
chai.should();
var expect = chai.expect;
var assert = chai.assert;

describe('PoC Router', function() {
	it('have controller', function() {
		expect(router.options.controller).to.be.ok;
	});

	it('have show index method', function() {
		expect(router.options.controller).to.have.property('showIndex')
	})
});
