/**
 * Spread 연산자 : 전개 구문
 * 전개 구문을 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 리터럴의 경우)로 확장하여
 * 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있음
 * 모든 Iterable은 Spread 될 수 있다. 순회가 가능한 모든 것들은 촤르륵 펼쳐질 수 있다.
 * func(...iterable)
 * [...iterable]
 * {...obj}
 */

function add(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums)); // Spread 연산자 사용 👉 6

// Rest parameters
function sum(first, second, ...nums) {
    console.log(nums); // [ '🍒', '🍍', '🍉' ] 👉 배열로 전달 됨
}
sum(1, 2, '🍒', '🍍', '🍉');

// Array Concat
const fruits1 = ['🍈', '🍓'];
const fruits2 = ['🍇', '🍋'];

let arr = fruits1.concat(fruits2);
console.log('Concat', arr); // Concat [ '🍈', '🍓', '🍇', '🍋' ]

arr = [...fruits1, '🍑', ...fruits2]; // 중간에 유연하게 추가 가능
console.log('Spread', arr); // Spread [ '🍈', '🍓', '🍑', '🍇', '🍋' ]

// Object
const woodz = { name : '조승연', age : 27, home : { address : 'maison' } };
const updated = { // 새로운 obj
    ...woodz,
    job : 'artist'
};
console.log('woodz', woodz); // { name: '조승연', age: 27, home: { address: 'maison' } }
console.log('updated', updated); // { name: '조승연', age: 27, home: { address: 'maison' }, job: 'artist' }