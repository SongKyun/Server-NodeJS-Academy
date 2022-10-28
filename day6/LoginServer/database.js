// 모듈 가져오기.
const mysql = require('mysql');
const fs = require('fs');

// DB 연결 정보 설정.
const client = mysql.createConnection({
    user : 'root',
    password : '123456', // 여러분의 암호를 입력하세요.
    database : 'userdb'
});

// DB 서버 접속.
client.connect((error)=> {
    if (error) {
        throw new Error('DB 접속 오류 발생: ' + error);
    }
});

// 로그인(login-sign-in).
function login(response, data) {
    
    // 쿼리문 작성 - 요청 구문.
    const query = 'select * from userinfo where userid = ? and password = ?';
    
    // 요청.
    client.query(query, [data.userid, data.password], (error, result) => {
        
        // 쿼리문 실행에 문제가 발생한 경우.
        if (error) {
            console.log('쿼리 검색 실패: ' + error);
            response.send('쿼리 검색 실패: ' + error);
        } else {
            // 검색한 결과가 있는 경우.
            if (result.length > 0) {
                console.log('로그인 성공');
                response.send('로그인 성공');
            } else {    // 검색 결과가 없는 경우 - id/pw 매치가 안된 경우.
                console.log('로그인 실패');
                response.send('로그인 실패');
            }
        }
    });
}

// 등록(register, sign-up).
function register(response, data) {
    
    // 쿼리문 작성.
    // id가 사용 중인지 확인.
    let query = 'select * from userinfo where userid = ?';
    client.query(query, [data.userid], (error, result) => {

        // 검색 결과 확인.
        if (result.length === 0) {
            
            // 쿼리문 변경.
            query = 'insert into userinfo set ?';
            client.query(query, data, (error, result) => {
                if (error) {
                    console.log('사용자 추가 실패: ' + error);
                    response.send('사용자 추가 실패: ' + error);
                } else {
                    console.log('사용자 ' + data.userid + ' 등록 완료.');

                    // 결과 보고용 HTML 파일을 응답.
                    fs.readFile('./registerResult.html', (error, html) => {
                        response.statusCode = 200;
                        response.setHeader('Content-Type', 'text/html');
                        response.send(html);
                    });
                }
            });

        } else {        // id 중복일 때.
            console.log('ID가 사용 중입니다.');
            response.send('ID가 사용 중입니다.');
        }
    });
}

// 모듈 내보내기.
module.exports = {
    login,
    register
}