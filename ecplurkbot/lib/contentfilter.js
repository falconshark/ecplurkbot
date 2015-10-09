function verifiyKeyword(keywordList, content) {

	for (var i = 0; i < keywordList.length; i++){

		var keyword = Object.keys(keywordList[i])[0];

		var re = new RegExp(keyword, "gi");

		var result = content.match(re);

		if(result){

			var key = result[0];

			var response = keywordList[i][key];

			return response;
		}
	}
}

module.exports = {
	'verifiyKeyword': verifiyKeyword
};
