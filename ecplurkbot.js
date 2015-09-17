var log4js = require('log4js');
var ini = require('ini');
var plurk = require('plurk');
var fs = require('fs');

var config = ini.parse(fs.readFileSync('config.ini', 'utf-8'));

log4js.clearAppenders();
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file(config['log'].log_path), 'BOT_LOG');
