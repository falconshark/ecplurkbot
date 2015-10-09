#EcPlurkBot - 輕鬆製作噗浪機器人
EcPlurkBot 是一款使用Node.js建構的應用，使用者只需幾步即可製作並架設自己的噗浪機器人。

##目前進度
完成基本的關鍵字檢測及回應功能。

##安裝需求
Node.js v0.10 或以上。

最新版本的Node.js可從以下網址取得: 

http://nodejs.org/download/

##安裝方法

###Linux/Mac OSX

1.將EcPlurkBot下載到你的電腦中：
https://github.com/dollars0427/ecplurkbot/archive/master.zip

2.解壓縮後打開Terminal，進入EcPlurkBot所在資料夾：

```bash
$ cd eecplurkbot-master
```
3.運行下列指令：

```bash
$ npm install
```

##設定
EcPlurkBot的所有設定檔皆位於config資料夾內。開始使用EcPlurkBot前，請先將它們一一改名：

1. config.sample.json => config.json

2. keywords.sample.json => keyword.json

以下是設定檔範例：

**config.sample.json** 

```json
{
  "token":{
    "consume_key":"your consume key",
    "consume_secret":"your consume secret",
    "access_token":"your access token",
    "access_token_secret":"your access token secret"
  },
  "mode":{
    "talk_mode": false
  },
  "log":{
    "logging" : true,
    "log_path": "./ecplurkbot.log"
  }
}
```
