#EcPlurkBot - 輕鬆製作噗浪機器人
EcPlurkBot 是一款基於Ruby（原為Nodejs）的應用，使用者只需幾步即可製作並架設自己的噗浪機器人。

##目前進度
* 完成基本的關鍵字檢測及回應功能。
* 完成隨機回應功能。

##未完成
* 輸出記錄檔
* 允許使用者編寫自己的關鍵字檢測及回覆程式

##安裝需求
Ruby v1.9.3 或以上
Ruby Gems 2.5.0 或以上

以上兩款軟體可從以下網址取得：

Ruby: https://www.ruby-lang.org/zh_tw/downloads/

Ruby Gems: https://rubygems.org/pages/download

##安裝方法

###Linux/Mac OSX

1.將EcPlurkBot下載到你的電腦中：
https://github.com/dollars0427/ecplurkbot/archive/master.zip

2.解壓縮後打開Terminal，進入EcPlurkBot所在資料夾：

```bash
$ cd ecplurkbot-master/ecplurkbot
```
3.執行下列指令：

```bash
$ bundle install
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
	"token": {
		"consume_key": "你的Plurk Consume Key",
		"consume_secret": "你的Plurk Consume Secret",
		"access_token": "你的Plurk Access Token",
		"access_token_secret": "你的Plurk Access Token Secret"
	},
	"log": {
		"logging": true,
		"log_path": "./ecplurkbot.log"
	}
}

```

###keywords.sample.json

噗浪機器人的關鍵字列表，使用者可自行新增更多關鍵字。

由於Json檔案格式較為嚴謹，為避免出錯建議在修改後將設定檔內容丟進 http://jsonlint.com/ 裡檢查是否有任何問題。

```json
{
	"keywords": [
		{"關鍵字1": ["回應1", "回應2"]},
		{"關鍵字2": ["回應1", "回應2"]},
		{"關鍵字3": ["回應1", "回應2"]},
		{"關鍵字4": ["回應1", "回應2"]}
	]
}

```

##運行

###Linux/Mac OSX

1.打開Terminal，進入EcPlurkBot所在資料夾：

```bash
$ cd ecplurkbot-master/ecplurkbot
```

2.執行以下指令（在前台運行）：

```bash
$ ruby ecplurkbot.rb
```

或執行以下指令（在背景中運行）：

```bash
$ screen ruby ecplurkbot.rb
```

##版本記錄
請參考Release頁面。

##回報問題
如在使用上有任何問題，歡迎打開Issues或直接在噗浪上詢問作者：
www.plurk.com/bluewinds0624
