#EcPlurkBot - 輕鬆製作噗浪機器人
EcPlurkBot 是一款使用Node.js建構的應用，使用者只需幾步即可製作並架設自己的噗浪機器人。

##目前進度
* 完成基本的關鍵字檢測及回應功能。
* 完成隨機回應功能。

##安裝需求
Node.js v0.10 或以上。

最新版本的Node.js可從以下網址取得: 

http://nodejs.org/download/

##安裝方法

###Windows
目前作者仍未在Windows環境下測試程式運作，本部份暫時留空

###Linux/Mac OSX

1.將EcPlurkBot下載到你的電腦中：
https://github.com/dollars0427/ecplurkbot/archive/master.zip

2.解壓縮後打開Terminal，進入EcPlurkBot所在資料夾：

```bash
$ cd ecplurkbot-master
```
3.執行下列指令：

```bash
$ npm install
```

##設定
EcPlurkBot的所有設定檔皆位於config資料夾內。開始使用EcPlurkBot前，請先將它們一一改名並修改：

1. config.sample.json => config.json

2. keywords.sample.json => keyword.json

以下是設定檔範例：

###config.sample.json

EcPlurkBot的基本設定檔。

```json
{
  "token":{
    "consume_key":"噗浪機器人的Consume key",
    "consume_secret":"噗浪機器人的Consume secret",
    "access_token":"噗浪機器人的Access token",
    "access_token_secret":"噗浪機器人的 Access token secret"
  },
  "mode":{
    "talk_mode": false 
    #設定是否打開對話模式，打開後噗浪機器人將會對你在噗裡的回應作出反應
  },
  "log":{
    "logging" : true, #設定是否打開記錄功能，打開後程式將會把記錄檔寫入指定位置
    "log_path": "./ecplurkbot.log" #設定記錄檔的路徑
  }
}
```

###keywords.sample.json

噗浪機器人的關鍵字列表，使用者可自行新增更多關鍵字。

由於Json檔案格式較為嚴謹，為避免出錯建議在修改後將設定檔內容丟進 http://jsonlint.com/ 裡檢查是否有任何問題。

```json
{
	"summon_keywords": {
		"召喚詞1": ["回應1"]
	},
	"keywords": [
		{"關鍵字1": ["回應1", "回應2"]},
		{"關鍵字2": ["回應1", "回應2"]},
		{"關鍵詞3": ["回應1", "回應2"]},
		{"關鍵詞4": ["回應1", "回應2"]}
	]
}

```

##運行

###Windows
目前作者仍未在Windows環境下測試程式運作，本部份暫時留空

###Linux/Mac OSX

1.打開Terminal，進入EcPlurkBot所在資料夾：

```bash
$ cd ecplurkbot-master
```

2.執行以下指令（在前台運行）：

```bash
$ node ecplurkbot.js
```

或執行以下指令（在背景中運行）：

```bash
$ node ecplurkbot.js &
```

##單元測試
本應用可使用Nodeunit進行單元測試，所有的測試檔皆位於test資料夾內。

```bash
$ nodeunit [測試檔檔名]
```

##版本記錄
請參考Release頁面。

##回報問題
如在使用上有任何問題，歡迎打開Issues或直接在噗浪上詢問作者：
www.plurk.com/bluewinds0624