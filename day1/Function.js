//// 함수.
//testFunc();
//
//// #1.
//// 함수 선언식.
//// 호이스팅 -> 선언 이전에 사용하는 것. -> 가능
//function testFunc() {
//    console.log('testFunc');
//}
//
//// #2.
////함수 표현식. -> 호이스팅 불가능
////testFunc2();
//
//let testFunc2 = function() {
//    console.log('testFunc2');
//}
//
//testFunc2();
//
//// #3
//// 화살표 함수(arrow function)
//// 호이스팅 불가능
//let testFunc3 = () => {
//    console.log('testFunc3');
//}
//
//testFunc3();

function add(a, b) {
    return a + b;
}

let add2 = (a,b) => a + b; // return 구문 생략.

console.log( add(10, 20 ));

console.log( add2(20, 30));