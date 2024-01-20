// typeof : 데이터 타입을 확인
// 값을 타입 문자열로 반환
let variable;
console.log(typeof variable); // -> undefined

variable = ''; // <- js는 할당된 값에 따라 타입이 동적으로 결정된다. = dynamic language, weakly typed programming language
console.log(typeof variable); // -> string

variable = 123;
console.log(typeof variable); // -> number

variable = {};
console.log(typeof variable); // -> object

variable = function () {};
console.log(typeof variable); // -> function

variable = Symbol();
console.log(typeof variable); // -> symbol

console.log('********');
console.log(typeof 123);
console.log(typeof '123');
