function respond(client, plurkId, response){

	var arg = {
		'plurk_id': plurkId,
		'content': response,
		'qualifier': 'says'
	};

	client.rq('Responses/responseAdd', arg);
}

module.exports = {
	'respond': respond
};
