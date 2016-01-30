# encoding: UTF-8

require 'rubygems'
require 'tjplurker'
require 'json'
require './lib/filter'
require './lib/plurk'

include TJP
include Filter

settingFile = File.read('./config/setting.json')
setting = JSON.parse(settingFile)

keywordsFile = File.read('./config/keywords.json')
keywords = JSON.parse(keywordsFile)['keywords']

consumerKey = setting['token']['consume_key']
consumerSecert = setting['token']['consume_secret']
accessKey = setting['token']['access_token']
accessSecret = setting['token']['access_token_secret']

plurk = Plurk.new(consumerKey, consumerSecert)
plurk.authorize(accessKey, accessSecret)

robot = Robot.new(consumerKey, consumerSecert, accessKey, accessSecret)
service_echo = Service.new{|tjp, data|

	response = checkContent(keywords, data.content).to_s

	if !response.empty?
		plurk.post('/APP/Responses/responseAdd', {:plurk_id=>data.plurk_id, :content=>response, :qualifier=>":"})
	end
}

robot.add_service(service_echo)
robot.start
