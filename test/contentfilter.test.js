'use strict';

var logger = require('log4js').getLogger('Unit-Test');
var filter = require(__dirname + '/../ecplurkbot/lib/contentfilter');

exports['Test verifiyKeyword'] = {

	'Test keywords found(One keywords in list, one response)': function(test) {

		var list = [{"Hello":["World!"]}];

		var content = "Hello World";

		var result = filter.verifiyKeyword(list, content);

		logger.debug('Content:' + content);

		logger.debug('Response: ' + result);

		test.ok(result !== null, 'It should return a string! ');

		test.equal(result, 'World!', 'Response should World!' );

		test.done();
	},

	'Test keywords found(Two keywords in list, one response)': function(test) {

		var list = [{"Hello":["World!"]},{"Kagero":["Love"]}];

		var content = "Kagero";

		var result = filter.verifiyKeyword(list,content);

		logger.debug('Keywords:' + content);

		logger.debug('Response: ' + result);

		test.ok(result !== null, 'It should return a string! ');

		test.equal(result, 'Love', 'Response should be Love!' );

		test.done();
	},

	'Test keywords found(One keywords in list, two response)': function(test) {

		var list = [{"Hello":["World!","Kumano!"]}];

		var content = "Hello World";

		var result = filter.verifiyKeyword(list, content);

		logger.debug('Content:' + content);

		logger.debug('Response: ' + result);

		test.ok(result !== null, 'It should return a string! ');

		test.ok(result === 'World!' || result === 'Kumano!', "Response should be World! or Kumano!");

		test.done();
	},

	'Test keywords found(Two keywords in list, two response)': function(test) {

		var list = [{"Hello":["World!","Kumano!"]},{"Kagero":["Love","Days"]}];

		var content = "Kagero";

		var result = filter.verifiyKeyword(list,content);

		logger.debug('Keywords:' + content);

		logger.debug('Response: ' + result);

		test.ok(result !== null, 'It should return a string! ');

		test.ok(result === 'Love' || result === 'Days', "Response should be Love or Days!");

		test.done();
	},

	'Test keywords not found(no keywords in list)': function(test) {

		var list = [];

		var content = "Kagero";

		var result = filter.verifiyKeyword(list,content);

		logger.debug('Keywords:' + content);

		logger.debug('Response: ' + result);

		test.ok(!result, 'It should return undefined! ');

		test.done();
	},

	'Test keywords not found(one keywords in list)': function(test) {

		var list = [{"Hello":["World!"]}];

		var content = "Kagero";

		var result = filter.verifiyKeyword(list,content);

		logger.debug('Keywords:' + content);

		logger.debug('Response: ' + result);

		test.ok(!result, 'It should return undefined! ');

		test.done();
	},

	'Test keywords not found(two keywords in list)': function(test) {

		var list = [{"Hello":["World!"]},{"Kagero":["Love"]}];

		var content = "Kuroshio";

		var result = filter.verifiyKeyword(list,content);

		logger.debug('Keywords:' + content);

		logger.debug('Response: ' + result);

		test.ok(!result, 'It should return undefined! ');

		test.done();
	}
}
