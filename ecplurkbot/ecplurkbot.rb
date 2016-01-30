# encoding: UTF-8

require 'rubygems'
require 'tjplurker'
require 'json'

include TJP
settingFile = File.read('./config/setting.json')
setting = JSON.parse(settingFile)

keywordsFile = File.read('./config/keywords.json')
keywords = JSON.parse(settingFile)

consumerKey = setting['token']['consume_key']
consumerSecert = setting['token']['consume_secret']
accessKey = setting['token']['access_token']
accessSecret = setting['token']['access_token_secret']

robot = Robot.new(consumerKey, consumerSecert, accessKey, accessSecret)
service_echo = Service.new{|tjp, data|



}

robot.add_service(service_echo)
robot.start
