function verifiyKeyword(keywordList, content) {

	for (var i = 0; i < keywordList.length; i++){

		var keywords = Object.keys(keywordList[i]);

		console.log(keywords.indexOf(content));

		if(keywords.indexOf(content) != -1){

			var response = keywordList[i][content];

			return response;
		}

		return null;
	}
}

module.exports = {
	'verifiyKeyword': verifiyKeyword
};
