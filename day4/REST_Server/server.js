// 모듈 가져오기
const express = require('express');
const requestHandler = require('./requestHandler');

// 서버 시작 함수
function start(database){
    
    // 데이터 베이스 주입 - 의존성 주입
    requestHandler.setDatabase(database);

    // express 객체 생성
    const app = express();

    // 미들웨어 설정 - BodyParser.
    app.use(express.urlencoded({extended : true}));

    // 라우팅 설정
    app.get('/', requestHandler.getTotalData);
    app.get('/user', requestHandler.getTotalData);
    app.get('/user/:id', requestHandler.getUserData);
    app.post('/user', requestHandler.insertData);
    app.put('/user/:id', requestHandler.changeData);
    app.delete('/user/:id', requestHandler.deleteUserData);

    // 요청 대기
    app.listen(3000);
    console.log('서버 실행 중');

}

module.exports = {
    start
}

