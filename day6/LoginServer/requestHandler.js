// 모듈 가져오기.
const fs = require('fs');

// DB 변수 - 의존성 주입
let mysqlDB;

// DB 연결 함수
function connectDB(database) {
    mysqlDB = database;
}

// 루트(/) 경로로 요청왔을 때 실행할 함수 - 리디렉션.
function start(request, response) {
    response.redirect('/register');
}

// 사용자 정보 등록하는 폼을 제공하는 함수
function showRegisterForm(request, response) {
    fs.readFile('./register.html', (error, html)=> {
       response.statusCode = 200;
       response.setHeader('Content-Type', 'text/html');
       response.send(html);
    })
}


function showLoginForm(request, response) {
    fs.readFile('./login.html', (error, html)=> {
       response.statusCode = 200;
       response.setHeader('Content-Type', 'text/html');
       response.send(html);
    })
}

// 사용자 등록
function register(request, response) {

    //추가할 데이터 설정
    const data = {
        userid : request.body.id,
        nickname : request.body.nickname,
        password : request.body.password,
    };
    // DB에 데이터 추가 요청
    mysqlDB.register(response, data);
}

// 로그인
function login(request, response) {
    
    // 로그인 확인할 데이터 설정
    const data = {
        userid : request.body.id,
        password : request.body.password
    };

    //로그인 확인 요청
    mysqlDB.login(response, data);
}

// 모듈 내보내기
module.exports = {
    connectDB,
    start,
    showRegisterForm,
    showLoginForm,
    register,
    login
}