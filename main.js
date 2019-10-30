function doPost(e) {
  // LINEから送信されたデータ
  var json = e.postData.getDataAsString();
  // リプライトークン
  var token = JSON.parse(json).events[0].replyToken;
  // 送信されてきたテキスト
  var text = JSON.parse(json).events[0].message.text;
  // リプライを返すAPIのURI
  var url = "https://api.line.me/v2/bot/message/reply";
  
  // HTTPヘッダーの設定
  var headers = {
    "Content-Type" : "application/json",
    "Authorization": SECRET
  };

  // リクエストボディのデータ
  var data = {
    "replyToken" : token, 
    "messages" : [{
      "type" : "text",
      "text" : text
    }]
  };

  var options = {
    "method" : "POST",
    "headers" : headers,
    "payload" : JSON.stringify(data)
  };

  // 返信
  return UrlFetchApp.fetch(url, options);  
}