// http 모듈 가져오기.
const http = require('http');

// 변수.
// naver.com.
// http://127.0.0.1:8000
const hostname = '127.0.0.1'; // IPv4 / IPv6.
const port = 3000;            // 포트(-> 서버 프로그램 구분을 위한 ) 번호.  

// 리스너(응답, Listener) 함수 선언.
function onRequest(request, response) {
    console.log(request.headers['user-agent']);

    response.statusCode = 200; // 상태코드 - 헤더
    response.setHeader('Content-Type', 'text/plain'); // 패킷-데이터
    response.end('Hello World');
}

// 서버 객체 생성.
const server = http.createServer(onRequest); // 콜백방식 

// 클라이언트의 요청을 무한 대기.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});