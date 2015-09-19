function verifiyKeyword(list, content) {

	for (var i = 0; i < list.length){

		if(Object.keys(list[i].keys) === content){

			var response = list[i][content];

			return response;
		}

		return null;
	}
}

function verifiySummonKeyword(config, content){

	if (config.summon_keywords[content]) {

		return true;
	}

	return false;
}

module.exports = {
	'verifiyKeyword': verifiyKeyword,
	'verifiySummonKeyword': verifiySummonKeyword
};
