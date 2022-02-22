// var e = JSON.parse(e.postData.contents).events[0];
function initReplyMessage(token, e, userid, groupid) {
    //console.log('initReplyMessage');
    var msg = e.message;
    var msgType = msg.type;
    var retMsg;
//    var regE = new RegExp('^[!！]{1}[a-zA-Z0-9_\\u4e00-\\u9fa5]+\\s[a-zA-Z0-9_\\u4e00-\\u9fa5\\s]+','g');
    
    switch (msgType) {
        case 'text':
//            if(msg.text.match(regE)){
                retMsg = initReplyMessageKW(msg.text, retMsg, userid, groupid);
//            } 
//            else {
//                retMsg = [{
//                    'type': msgType,

//                }];
//            }
            break;

        case 'image':
            retMsg = [{
                    'type': 'text',

                },
                {
                    'type': 'text',

                }
            ];
            break;

        case 'sticker':
            retMsg = [{
                'type': msgType,
                'packageId': msg.packageId,
                'stickerId': msg.stickerId
            }];
            break;

        case 'location':
            retMsg = initWeatherLocation(msg.address, msg.latitude, msg.longitude, token);
            break;

        default:
            retMsg = [{

            }];
            break;
    }
    //console.log('retMsg');
    return retMsg;
}