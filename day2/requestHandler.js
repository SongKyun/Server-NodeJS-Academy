const fs = require('fs'); // filesystem 모듈

// 요청에 따른 응답 함수를 가지는 스크립트.
// 요청 경로마다 다른 응답 처리를 위한 함수가 작성되는 스크립트.
function start(response) {
    console.log('request handler start 함수 호출됨');

    // html 파일 읽어서 응답하기
    fs.readFile('./index.html', function(error,data)  {
        // 응답
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        //response.end('Hello Start');
        response.end(data);
    });

}

function upload(response) {
    console.log('request handler upload 함수 호출됨');

    // 응답
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('Hello Upload');

}

// 파비콘 응답을 위한 함수
function favicon(response){
    // 이미지 읽어서 응답
    fs.readFile('./logo.png', function(error, image){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'image/png');
        response.end(image);
    });
}

// 모듈 내보내기
module.exports = {
    start,
    upload,
    favicon
}