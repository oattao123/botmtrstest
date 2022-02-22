
function doGet(e) {
    return ContentService.createTextOutput(UrlFetchApp.fetch("http://ip-api.com/json"));
}

function doPost(e) {
//    console.log(JSON.parse(e.postData));
//    var msg = JSON.parse(e.postData.contents);
//    console.log(msg);
  var param = e.parameter;
  var postMsg = [];
  var parseData = qs.parse(param)
  
  for(var i in parseData){
    postMsg.push(parseData[i])
  }

    // e => reply Event  
    if (JSON.stringify(param) == '{}') {
        initReply(e);
    } else {
        console.log(postMsg);
        initPush(postMsg, e);      
    }
    return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}