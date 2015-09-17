var log4js = require('log4js');
var plurk = require('plurk');
var nconf = require('nconf');

log4js.clearAppenders();
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file(config['log'].log_path), 'BOT_LOG');
