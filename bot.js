require('dotenv').config();
const { RTMClient } = require('@slack/client');
const token = process.env.SLACK_TOKEN
const rtm = new RTMClient(token);

rtm.start();

rtm.on('message', (message) => {
    var text = message.text // 슬랙 전체 메세지
    var googling_keyword = text.slice(4); // 검색할 키워드
    var googling_detail_keyword = googling_keyword.replace(' ',"+") // 공백을 + 로 치환
    var call_sign = text.slice(0,3); // !구글
    console.log(googling_detail_keyword);
    if(call_sign==="!구글"){
        rtm.sendMessage(`https://www.google.com/search?q=${googling_detail_keyword}`, message.channel)
    }
});