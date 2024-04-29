/**
 * Strict mode (엄격 모드) : 리액트와 같은 프레임워크 사용 시, 엄격 모드가 기본임
 * 1. 기존에는 조용히 무시되던 에러들을 throwing 함
 * 2. JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로 잡음
 * 가끔씩 엄격 모드의 코드는 비엄격 모드의 동일한 코드보다 더 빨리 작동하도록 만들어 짐
 * 3. 엄격 모드는 ECMAScript의 차기 버전들에서 정의 될 문법을 금지
 */

'use strict'; // 엄격 모드 선언

// var x = 1;
// delete x; // 불가

function add(x) {
    var a = 2;
    // b = a + x; -> var 키워드 생략 불가
    var b = a + x;
    console.log(this); // undefined
}
add(1);

const array = ['🥨', '🍔', '🍕'];
// for(num of array) { -> 지역 변수 앞에 const 생략 불가
for(const num of array) {
    console.log(num);
}