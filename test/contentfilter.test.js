'use strict';

var logger = require('log4js').getLogger('Unit-Test');
var filter = require(__dirname + '/../ecplurkbot/lib/contentfilter');

exports['Test verifiyKeyword'] = {

	'Test keywords found(One keywords in list)': function(test) {

		var list = [{"Hello":"World!"}];

		var content = "Hello";

		var result = filter.verifiyKeyword(list,content);

		logger.debug('Response: ' + result);

		test.ok(result !== null, 'It should return a string! ');

		test.equal(result, 'World!', 'It should return World!' );

		test.done();
	},

	'Test keywords found(Two keywords in list)': function(test) {

		var list = [{"Hello":"World!","Kagero":"Love"}];

		var content = "Kagero";

		var result = filter.verifiyKeyword(list,content);

		logger.debug('Response: ' + result);

		test.ok(result !== null, 'It should return a string! ');

		test.equal(result, 'Love', 'It should return Love!' );

		test.done();
	}
}
