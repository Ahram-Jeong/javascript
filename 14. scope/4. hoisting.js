/**
 * 함수의 호이스팅은 함수의 선언 전에 호출이 가능하게 해줌
 * 함수 선언문은 선언 이전에도 호출이 가능함
 */

print();

function print() {
    console.log('WOODZ');
}

/**
 * 변수(let, const)와 클래스는 선언만 호이스팅이 되고 초기화는 안됨
 * 초기화 전 변수에 접근하면 컴파일(빌드) 에러가 발생
 */
let bonjour = 'bonjour';
console.log(bonjour);
// let bonjour = 'bonjour';

let func1 = function () {};

// const cat = new Cat();
class Cat {}

let x = 1;
{
    console.log(x);
    // let x = 2;
}