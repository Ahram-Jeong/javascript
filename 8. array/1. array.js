// 배열 생성 방법
let array = new Array(3);
console.log(array);

array = new Array(1, 2, 3, 4);
console.log(array);

array = Array.of(1, 2, 3, 4, 5);
console.log(array);

const anotherArray = ['🍕', '🍔', '🥘', '🍰'];
console.log(anotherArray);

// Array.from() : Creates an array from an iterable object
array = Array.from(anotherArray);
console.log(array); // [ '🍕', '🍔', '🥘', '🍰' ]

array = Array.from('WOODZ');
console.log(array); // [ 'W', 'O', 'O', 'D', 'Z' ]

/**
 * 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있음
 * BUT, 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고! 오브젝트와 유사함
 * 💡 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체이다 💡
 * 이것을 보완하기 위해 타입이 정해져 있는 '타입 배열'이 있음 (Typed Collections)
 */

array = Array.from({
    0 : '고',
    1 : '양',
    2 : '이',
    length : 3
});
console.log(array);