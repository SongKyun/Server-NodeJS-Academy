// 모듈 가져오기
const express = require('express');
const requestHandler = require('./requestHandler');

// 모듈 내보내기
module.exports = {
    start : () => {
        // express 객체 생성.
        const app = express();

        // 미들웨어 설정
        app.use(express.urlencoded({extended : false}));

        // 라우팅 설정
        app.get('/', requestHandler.sendLoginHtml);
        app.get('/login', requestHandler.sendLoginHtml);
        app.post('/login', requestHandler.checkLogin);

        // 요청 대기
        app.listen(3000);
        console.log('서버 실행 중.');


    }
}