'use strict';
/**
 * 1. 글로벌 컨텍스트의 this -> 글로벌 객체를 가리킴
 * - 브라우저 : window 객체가 전역 객체
 * - 노드 : 모듈
 */
const x = 0;
module.exports.x = x;
console.log(this); // { x: 0 }
console.log(globalThis); // 노드에서 사용할 수 있는 전역 객체
// globalThis.setTimeout()
// setTimeout()

/**
 * 2. 함수 내부에서의 this
 * non-strict mode -> 글로벌 객체를 가리킴 (globalThis)
 * strict mode -> 함수 내부 스코프에 this의 정보가 없으면 undefined
 */
function fun() {
    console.log(this);
}
fun();

/**
 * 3. 생성자 또는 클래스에서의 this -> 앞으로 생성 될 인스턴스 자체를 가리킴
 */
function Cat(name) {
    this.name = name;
    this.printName = function () {
        console.log(this.name);
    };
}
const cat1 = new Cat('조승연');
const cat2 = new Cat('우즈');
cat1.printName();
cat2.printName();