// NodeJs의 모듈 시스템
function addNumber(a,b) {
    return a+b;
}

function substract(a,b) {
    return a - b ;
}

// 모듈 추출
module.exports = {
    'addNumber' : addNumber,
    substract : substract
}