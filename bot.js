require('dotenv').config();
const { RTMClient } = require('@slack/client');
const token = process.env.SLACK_TOKEN
const rtm = new RTMClient(token);

rtm.start();

rtm.on('message', (message) => {
    var text = message.text
    var korean_googling_keyword = text.slice(4);
    var korean_googling_detail_keyword = korean_googling_keyword.replace(/ /gi, '+');
    var korean_call_sign = text.slice(0,3);
    var english_googling_keyword = text.slice(8);
    var english_googling_detail_keyword = english_googling_keyword.replace(/ /gi, '+');
    var english_call_sign = text.slice(0,7)
    if(korean_call_sign==="!구글"){
        rtm.sendMessage(`https://www.google.com/search?q=${korean_googling_detail_keyword}`, message.channel)
    } else if(english_call_sign==="!google"||"!Google"){
        rtm.sendMessage(`https://www.google.com/search?q=${english_googling_detail_keyword}`, message.channel)
    }
});
