var log4js = require('log4js');
var PlurkClient = require('plurk').PlurkClient;
var nconf = require('nconf');
nconf.file('config', __dirname + '/config/config.json')
	.file('keywords', __dirname + '/config/keywords.json');

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

var rec;

rec = checkAndRes;

client.startComet(function(err, data, cometUrl) {

	if (err) {
		logger.error(err);
		return;
	}

	logger.info('Comet channel started.');

	rec(cometUrl);

});

function checkAndRes(reqUrl) {

	client.rq('Alerts/addAllAsFriends');
	client.comet(reqUrl, function(err, cometData, newUrl) {
		if (err) {
            logger.error('There are some error ! ', err);
			rec(cometUrl);
			return;
		}
        
		var msgs = cometData.data;
		if (msgs && Array.isArray(msgs)) {
			msgs.filter(function(data) {
				return (data && (data.type === 'new_plurk'));
			}).forEach(function(data) {
				var content = data.content_raw;
				var reverse = content.split("").reverse().join("");
				var arg = {
					'plurk_id': data.plurk_id,
					'content': reverse,
					'qualifier': 'thinks'
				};
				client.rq('Responses/responseAdd', arg);
			});
		}
		rec(newUrl);
	});
}
