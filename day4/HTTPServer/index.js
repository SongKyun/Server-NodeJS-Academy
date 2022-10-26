// 서버의 시작 지점을 index로 많이 사용. 진입점

// 모듈 가져오기
const server = require('./server');

// 서버 시작
server.start(router.route,handle);
