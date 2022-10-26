// 전달 받은 경로(pathname)를 확인하고, 처리에 필요한 함수를 간접 실행해주는 함수
function route(pathname, handle, response, request){
    console.log(pathname + '경로로 요청됨.');

    // 경로 값 확인해서 함수 실행
    if (typeof(handle[pathname]) === 'function') {
        handle[pathname](response,request);
    } else { // 함수 못 찾은 경우 오류 출력
        console.log('404 오류 페이지 검색 실패');

        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.end('404 오류. 페이지를 찾을 수 없습니다.');
    }
}

// 모듈 내보내기.
module.exports = {
    // route : route
    route
}