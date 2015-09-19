function verifiyKeyword(keywordList, content) {

	var keywords = Object.keys(keywordList);

	for (var i = 0; i < keywordList.length; i++){

		if(keywordList.indexOf(content) === -1){

			var response = keywordList[i][content];

			return response;
		}

		return null;
	}
}

module.exports = {
	'verifiyKeyword': verifiyKeyword
};
