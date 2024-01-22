// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘 다 같음
// !== 값과 타입이 다름
console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2'); // true : '2'가 숫자 2로 자동 변환 되어 비교
console.log(2 === '2'); // false : 타입이 다름, 엄격한 비교
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0);
console.log(false === 0);
console.clear();

const obj1 = {
    name: 'woodz',
}

const obj2 = {
    name: 'woodz',
}

console.log(obj1 == obj2); // false : 객체 비교 시, 객체의 메모리 주소 값이 비교 되므로 다르다.
console.log(obj1 === obj2); // false : 값 자체가 다르므로
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

let obj3 = obj2;
console.log(obj2 == obj3); // true : 동일한 메모리 주소
console.log(obj2 === obj3); // true