require('dotenv').config();
const axios = require('axios');
const cheerio = require('cheerio');
const { RTMClient } = require('@slack/client');
const token = process.env.SLACK_TOKEN
const rtm = new RTMClient(token);

rtm.start();

const getHtml = async () => {
    try {
        return await axios.get("https://sports.news.naver.com/kfootball/index.nhn");
    } catch (error) {
        console.error(error);
    }
}

getHtml()
    .then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        console.log($);
    })

rtm.on('message', (message) => {
    var text = message.text
    if(text==="!구글"){
        rtm.sendMessage("google.com", message.channel)
    }
});