require('dotenv').config();
const { RTMClient } = require('@slack/client');
const token = process.env.SLACK_TOKEN
const rtm = new RTMClient(token);

rtm.start();

rtm.on('message', (message) => {
    var text = message.text
    var google_text = text.slice(4);
    if(google_text){
        rtm.sendMessage(`google.com/search?q=${google_text}`, message.channel)
    }
    console.log(text)
});