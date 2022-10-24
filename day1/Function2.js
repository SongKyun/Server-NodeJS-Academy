// 객체.
// 클래스 기반 언어에서 객체 생성하듯이 사용하는 방법.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let ronnie = new Person('ronnie',38);
let taejun = new Person('taejun', 6);

console.log(ronnie,taejun);