function verifiyKeyword(keywordList, content) {

	for (var i = 0; i < keywordList.length; i++){

		//從keywordList的Array裡提取關鍵字

		var keyword = Object.keys(keywordList[i])[0];

		//透過正規表達式搜尋關鍵字

		var re = new RegExp(keyword, "gi");

		var result = content.match(re);

		//如輸入的內容裡有符合的關鍵字，則作出相應的回應

		if(result){

			var key = result[0];

			var minNumber = 0;

			var maxNumber = keywordList[i][key].length - 1;

			//隨機抽取一個數字，再透過此數字從回應的陣列裡取出對應的回應

			var responseNumber = _getRandomInt(minNumber, maxNumber);

			var response = keywordList[i][key][responseNumber];

			return response;
		}
	}
}

function _getRandomInt(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min;

}

module.exports = {
	'verifiyKeyword': verifiyKeyword
};
