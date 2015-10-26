var log4js = require('log4js');
var PlurkClient = require('plurk').PlurkClient;
var nconf = require('nconf');
nconf.file('config', __dirname + '/config/config.json')
	.file('keywords', __dirname + '/config/keywords.json');

var filter = require(__dirname + '/lib/contentfilter');
var action = require(__dirname + '/lib/action');

var logging = nconf.get('log').logging;
var log_path = nconf.get('log').log_path;

if (logging) {
	log4js.clearAppenders();
	log4js.loadAppender('file');
	log4js.addAppender(log4js.appenders.file(log_path), 'BOT_LOG');
}

var logger = log4js.getLogger('BOT_LOG');

var consumerKey = nconf.get('token').consume_key;
var consumerSecret = nconf.get('token').consume_secret;
var accessToken = nconf.get('token').access_token;
var accessTokenSecret = nconf.get('token').access_token_secret;

var summon_keywords = nconf.get('summon_keywords');
var keywords = nconf.get('keywords');

var client = new PlurkClient(true, consumerKey, consumerSecret, accessToken, accessTokenSecret);

startComet();

function startComet() {

	client.startComet(function(err, data, cometUrl) {

		if (err) {
			logger.error(err);
			setTimeout(startComet, 5000);
			return;
		}

		logger.info('Comet channel started.');

		checkTL(cometUrl);

	});
}

function checkTL(reqUrl) {

	client.rq('Alerts/addAllAsFriends');

	client.comet(reqUrl, function(err, cometData, newUrl) {
		if (err) {
			logger.error('There are some error ! ', err);
			setTimeout(startComet, 5000);
			return;
		}

		var msgs = cometData.data;

		if (msgs && Array.isArray(msgs)) {

			msgs.filter(function(data) {
				return (data && (data.type === 'new_plurk'));
			}).forEach(function(data) {

				var content = data.content_raw;

				var plurkId = data.plurk_id;

				var response = filter.verifiyKeyword(keywords, content);

				if (response) {

					action.respond(client, plurkId, response);
				}
			});
		}
		checkTL(newUrl);
	});
}
