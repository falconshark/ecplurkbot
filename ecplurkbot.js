var log4js = require('log4js');
var plurk = require('plurk');
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
