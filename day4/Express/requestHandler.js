// 모듈 가져오기
const fs = require('fs');

// 임시 저장용 변수
let savedFilename = '';

// 모듈 내보내기
module.exports = {
    start: (request, response) => {
        // 루트(/), /start 경로로 요청이 왔을 때 응답.
        // __dirname / __filename.
        fs.readFile(__dirname + '/index.html', (error, data) => {
            if (error) {
                response.send('Error ocurred: ' + error);
            } else {
                response.statusCode = 200;
                response.setHeader('Content-Type', 'text/html');
                response.send(data);
            }
        });

        // index.html을 읽어서 응답
    },
    favicon: (request, response) => {
        // /favicon.ico 경로로 요청이 왔을 때 응답.
        // logo.png 파일을 읽어서 이미지 전송.
        fs.readFile(__dirname + '/logo.png', (error, data) => {
            if (error) {
                response.send('Error occured: ' + error)
            } else {
                response.send(data);
            }
        });
    },
    upload: (request, response) => {
        
        //console.log(request.files);
        //response.send(request.files);

        // 업로드된 파일의 경로 변경
        const filepath = `${__dirname}/uploads/${request.files.image.originalFilename}`;
        fs.rename(request.files.image.path, filepath, (error) => {
            if (error){
                response.send('Error occured: ' + error);
            } else {
                savedFilename = request.files.image.name;
                response.send('<img src=/show />');
            }
        });

    },
    show: (request, response) => {
        // saveFilename 변수에 저장된 값이 빈 문자열이 아닌지 확인
        if (savedFilename !== '') {
            // 불러올 경로 값
            const filepath = `${__dirname}/uploads/${savedFilename}`;
            // 파일 읽기
            fs.readFile(filepath, (error, data) => {
                // 오류 처리
                if (error) {
                    response.send('Error occured: ' + error);
                } else {
                    // 데이터를 읽어온 후에 파일 이름 초기화.
                    savedFiledname = ' ';
                    // 응답 처리
                    response.send(data);
                }
            });
        }

    }
}