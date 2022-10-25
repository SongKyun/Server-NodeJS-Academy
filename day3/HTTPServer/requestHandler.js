const fs = require('fs'); // filesystem 모듈
const formidable = require('formidable'); // 모듈

// 요청에 따른 응답 함수를 가지는 스크립트.
// 요청 경로마다 다른 응답 처리를 위한 함수가 작성되는 스크립트.
function start(response) {
    console.log('request handler start 함수 호출됨');

    // html 파일 읽어서 응답하기
    fs.readFile('./index.html', function(error,data)  {

        if(error) {

            response.statusCode = 500;
            response.setHeader('Content-Type', 'text/html');
            response.end('Error 발생: ' + error.toString());

        } else {

            // 응답
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            //response.end('Hello Start');
            response.end(data);

        }

    });

}

function upload(response, request) {
    console.log('request handler upload 함수 호출됨');

    // parse a file upload
    const form = formidable({ multiples: true });

    // 파싱(해석)
    form.parse(request, (error, fields, files) => {
        // 오류가 있으면 오류 출력
        if (error){
            console.log('Error occured: ' + error);
        } else {
            // 업로드된 이미지의 경로 출력.
            // console.log(files.image);

            // 업로드된 임시 파일을 특정 경로로 옮기기.
            fs.rename(files.image.filepath, './uploads/image.png', (error) => {
                // 응답
                response.statusCode = 200;
                response.setHeader('Content-Type', 'text/html');
                //response.end(files.image.filepath);
                // 요청을 /show 경로로 처리
                response.end('<img src=/show />')
            });
        }
    });
}
 // show 경로로 요청이 왔을 때 
 function show(response) {
    fs.readFile('./uploads/image.png',(error, data) => {
        if (error) {
            console.log('Error occured: ' + error);
        } else {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'image/png');
            response.end(data);

            //response.writeHead
        }
    });
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
    favicon,
    show
}