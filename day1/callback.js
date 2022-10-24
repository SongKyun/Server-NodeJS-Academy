// TDD - Test Driven Development.

// test 함수는 함수를 인자로 받아 호출시킴.
function test(callback) {
    // 전달 받은 callback이 함수인지 확인 후 실행
    if (typeof(callback) === 'function'){
        callback();
    }
}

// print 함수는 단순히 문자를 출력.
const print = function() {
    console.log('Hello');
}

// test 함수를 호출하면서, print 함수를 인자로 전달.
// test(print);

// -> testFunc1();
// 무명 함수로 전달.
test(function() {
    console.log('콜백 함수 호출');
});

