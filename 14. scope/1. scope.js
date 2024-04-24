/**
 * 코드 블럭 : {}, if () {}, for () {}, function () {}
 * 블럭 외부에서는 블럭 내부의 지역 변수를 참조X
 */

{
    const a = 'a';
}

console.log(a); // 에러
const b = 'b';

// 함수 외부에서는 함수 내부의 지역 변수를 참조X
function print() {
    const msg = 'Hello WOODZ';
    console.log(msg);
}
console.log(msg); // 에러

// 함수 외부에서는 함수의 매개변수를 참조X
function sum(a, b) {
    console.log(a, b);
}
console.log(a, b); // 에러