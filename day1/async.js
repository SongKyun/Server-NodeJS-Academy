// 우리가 배우는 대부분의 언어는 동기 방식의 동작 매커니즘을 가짐.
// NodeJS는 비동기 방식으로 동작한다.
console.log('시작');

// setTimeout은 타이머를 설정하고,
// 타이머 시간이 지나면, 전달한 함수를 실행.
// 뒤에 2000 => 2000 밀리 세컨드 -> 2초.
setTimeout(() => {
    console.log('테스트');
}, 2000);

console.log('끝');