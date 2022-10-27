// 모듈 가져오기.
const fs = require('fs');

// 더비 DB 객체.
let database = { };

// DB 설정 함수 - Dependency Injection.
function setDatabase(db) {
    database = db;
}

// 전체 사용자 데이터 조회.
function getTotalData(request, response) {
    //console.log(typeof(database));
    response.send(database.get());
}

// id로 사용자 조회.
function getUserData(request, response) {
    //console.log(request.params.id + " : " + request.route.id);
    response.send(database.get(request.params.id));
}

// 사용자 데이터 추가 함수.
function insertData(request, response) {

    // 폼 데이터 파싱.
    // 데이터 규격 { id: 1, name : "", region : ""}
    const name = request.body.name;
    const region = request.body.region;

    // name과 region 데이터가 모두 있으면 실행.
    if (name && region) {
        // 데이터 추가 및 응답 처리.
        response.send(database.insert({
            name,
            region
        }));

    } else { //없으면 오류
        throw new Error('error');
    }
}

// 데이터 변경 처리
function changeData(request, response) {
    // 폼 데이터 파싱
    const id = request.params.id;
    const name = request.body.name;
    const region = request.body.region;

    // 저장된 데이터 조회
    const data = database.get(id);
    // 데이터 변경.
    // || 연산자를 기준으로 왼쪽의 값이 있으면 왼쪽 데이터가 대입됨.
    // 왼쪽 데이터가 없으면 오른쪽 값이 대입됨.
    // 자바 스크립트에만 있는 연산자.
    data.name = name || data.name;
    data.region = region || data.region;

    // 응답
    response.send(data);
}

// 데이터 삭제
function deleteUserData(request, response){
    response.send(database.delete(request.params.id));
}

// 모듈 내보내기
module.exports = {
    setDatabase,
    getTotalData,
    getUserData,
    insertData,
    changeData,
    deleteUserData
}