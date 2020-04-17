require('dotenv').config();
const { RTMClient } = require('@slack/client');
const token = process.env.SLACK_TOKEN
const rtm = new RTMClient(token);

rtm.start();

rtm.on('message', (message) => {
    var text = message.text
    var korean_call_sign = text.slice(0,3);
    var korean_googling_keyword = encodeURIComponent(text.slice(4));
    var english_call_sign = text.slice(0,7)
    var english_googling_keyword = encodeURIComponent(text.slice(8));
    if(korean_call_sign==="!구글"){
        rtm.sendMessage(`https://www.google.com/search?q=${korean_googling_keyword}`, message.channel)
    } 
    if(english_call_sign==="!google" || english_call_sign === "!Google"){
        rtm.sendMessage(`https://www.google.com/search?q=${english_googling_keyword}`, message.channel)
    }
});
