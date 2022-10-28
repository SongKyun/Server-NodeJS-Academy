// 모듈 가져오기.
const server = require('./server');
const requestHandler = require('./requestHandler');
const database = require('./database');


// 핸들러 생성자
function HandleCreator(method, path, callback) {
    this.method = method;
    this.path = path;
    this.callback = callback;
}

// 라우팅 정보 배열 생성.
const handle = [
    new HandleCreator('get', '/register', requestHandler.showRegisterForm),
    new HandleCreator('get', '/', requestHandler.start),
    new HandleCreator('get', '/login', requestHandler.showLoginForm),
    new HandleCreator('post', '/register', requestHandler.register),
    new HandleCreator('post', '/login', requestHandler.login)
];

// DB 연결
requestHandler.connectDB(database);

// 서버 시작
server.start(handle);
