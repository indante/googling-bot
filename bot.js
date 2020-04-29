require('dotenv').config();
const { RTMClient } = require('@slack/client');
const token = process.env.SLACK_TOKEN
const rtm = new RTMClient(token);

rtm.start();

rtm.on('message', (message) => {
    var text = message.text
    var koreanCallSign = text.slice(0,3);
    var koreanGooglingKeyword = encodeURIComponent(text.slice(4));
    var englishCallSign = text.slice(0,7)
    var englishGooglingKeyword = encodeURIComponent(text.slice(8));
    if(koreanCallSign==="!구글"){
        rtm.sendMessage(`https://www.google.com/search?q=${koreanGooglingKeyword}`, message.channel)
    } 
    if(englishCallSign==="!google" || englishCallSign === "!Google"){
        rtm.sendMessage(`https://www.google.com/search?q=${englishGooglingKeyword}`, message.channel)
    }
});
