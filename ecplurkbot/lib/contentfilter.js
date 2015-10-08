function verifiyKeyword(keywordList, content) {

	for (var i = 0; i < keywordList.length; i++){

		var keyword = Object.keys(keywordList[i])[0];

		var re = new RegExp(keyword, "g");

		if(re.test(content)){

			var response = keywordList[i][content];

			return response;
		}
	}
}

module.exports = {
	'verifiyKeyword': verifiyKeyword
};
