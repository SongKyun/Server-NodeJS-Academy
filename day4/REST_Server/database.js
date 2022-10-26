// 데이터 베이스 관련 기능 제공
// 단순 버전 -> 배열에 데이터 저장.

// 데이터 저장용 배열
// -> MySQL.
let storage = [];

// 데이터에 id 값 부여를 위한 카운트 변수.
let count = 1;

// 데이터 조회 함수.
function get(id) {
    // id 파라미터가 전달 됐을 때
    if (id) {
        // 변수 가공 문자열일 경우 삼항 연산자
        id = typeof(id) === 'string' ? Number(id) : id;

        //  데이터 선택
        for (let ix = 0; ix < storage.length; ++ix) {
            if (storage[ix].id === id) {
                return storage[ix];
            }
        }
    } else { // id 파라미터가 전달 되지 않았을 때.
        return storage;
    }
}

//데이터 추가 함수.
function insert(data) {
    // 데이터 id 값 추가.
    data.id = cout++;
    // 배열에 새로운 데이터 추가
    storage.push(data);
    // 추가한 데이터 반환.
    return data;
}

// 데이터 삭제 함수.
function deleteData(id) {
    id = typeof(id) === 'string' ? Number(id) : id;

     //  데이터 삭제
     for (let ix = 0; ix < storage.length(); ++ix) {
        // 같은 id를 가진 데이터 검색
        if (storage[ix].id === id) {
            // 데이터 삭제
            storage.splice(ix,1); // splice 자바스크립트 함수 
            // 제거 성공.
            return true;
        }
    }
}

// 모듈 추출.
module.exports = {
    get, 
    insert,
    delete : deleteData
}