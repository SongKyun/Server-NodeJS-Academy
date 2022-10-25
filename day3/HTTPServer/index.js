// 서버의 시작 지점을 index로 많이 사용. 진입점

// 모듈 가져오기
const server = require('./server');
const router = require('./router'); // 경로 확인 실행해줘야 하는 연결
const requestHandler = require('./requestHandler'); // 실제 실행


// 경로와 실행할 함수 정보를 연결.
// 해시테이블 활용. 
// 경로를 키(Key) - 실행할 함수를 값(Value)로 연결 키와 밸류 저장
const handle = {
    '/' : requestHandler.start,
    '/start' : requestHandler.start,
    '/upload' : requestHandler.upload,
    '/favicon.ico' : requestHandler.favicon,
    '/show' : requestHandler.show
}

// 서버 시작
server.start(router.route,handle); // Dependency Injection (의존성 주입)

// 스크립트 간의 직접적인 의존도는 낮추는 게 좋다 -> 디커플링(Decoupling)