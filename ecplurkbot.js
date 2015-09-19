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

var client = new PlurkClient(true, consumerKey, consumerSecret, accessToken, accessTokenSecret);

client.startComet(function (err, data, cometUrl) {

    if (err) {
        logger.error(err);
        return;
    }

    logger.info('Comet channel started.');

});
