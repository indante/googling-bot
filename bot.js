require('dotenv').config();
const { RTMClient } = require('@slack/client');
const token = process.env.SLACK_TOKEN
const rtm = new RTMClient(token);

rtm.start();

rtm.on('message', (message) => {
    var text = message.text
    var googling_keyword = text.slice(4);
    var call_sign = text.slice(0,3);
    if(call_sign==="!구글"){
        rtm.sendMessage(`google.com/search?q=${googling_keyword}`, message.channel)
    }
});