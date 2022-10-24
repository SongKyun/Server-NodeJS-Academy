const http = require('http');
const url = require('url'); // 요청 경로를 추출하기 위해 사용.

// 서버 서비스 시작 함수
function start(route,handle) {
    const server = http.createServer((req, res) => {

      //경로 추출
      const pathname = url.parse(req.url).pathname;
      console.log('pathname: ' + pathname + " , req.url: " + req.url);

      // 라우팅 처리 함수를 실행하면서, 경로 전달.
      route(pathname, handle, res);

        // res.statusCode = 200;
        // res.setHeader('Content-Type', 'text/html');
        // res.end('Hello World');
      });

      server.listen(3000, () => {
        console.log('server started');
      });

}

// 모듈 내보내기
module.exports = {
    start : start
}