// 모듈 가져오기
const http = require('http');
const express = require('express'); // 외부 모듈
const fs = require('fs');

// 서버 시작 함수
const start = (req, res) => {
    
    // 객체 생성
    const app = express();
    
    
    app.use((req,res) => {

        // GET 요청을 통해 전달한 파라미터 파싱(해석)
        console.log(req.query['name'] + " : " + req.query['age']);

        //index.html을 읽어와서 응답하는 코드 작성
        fs.readFile('./index.html', function(error,data)  {

            if(error) {
                res.send('Error occured:' + error);
            } else {
                res.send(data.toString());
            }    
        });
    });

    //서버 생성 및 요청 대기
    http.createServer(app).listen(3000);
    console.log('server started');
}

//모듈 내보내기
module.exports = {
    start
}
