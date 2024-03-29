/**
 * 배열의 함수
 * point : 배열 자체를 변경 or 새로운 배열 반환
 */

const fruits = ['🍋', '🍑', '🍍'];

// 특정 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false

// 특정 아이템의 위치 찾기
console.log(fruits.indexOf('🍍')); // 2

// 배열에 특정 아이템이 있는 지 체크
console.log(fruits.includes('🍍')); // true

// + 추가 => 맨 뒤
fruits.push('🥝');
console.log(fruits); // 배열 자체를 수정 (update), [ '🍋', '🍑', '🍍', '🥝' ]
console.log(fruits.length); // 4

// + 추가 => 맨 앞
fruits.unshift('🍉');
console.log(fruits); // 배열 자체를 수정 (update), [ '🍉', '🍋', '🍑', '🍍', '🥝' ]
console.log(fruits.length); // 5

// - 삭제 => 맨 뒤
let lastItem = fruits.pop();
console.log(fruits); // 배열 자체를 수정 (update), [ '🍉', '🍋', '🍑', '🍍' ]
console.log(lastItem); // 🥝

// - 삭제 => 맨 앞
lastItem = fruits.shift();
console.log(fruits); // 배열 자체를 수정 (update), [ '🍋', '🍑', '🍍' ]
console.log(lastItem); // 🍉

// 배열 중간에 추가, 삭제
const deleted = fruits.splice(1, 1);
console.log(fruits); // 배열 자체를 수정 (update), [ '🍋', '🍍' ]
console.log(deleted); // [ '🍑' ]

fruits.splice(1, 0, '🍓', '🍏'); // 삭제하지는 않고 추가만
console.log(fruits); // 배열 자체를 수정 (update), [ '🍋', '🍓', '🍏', '🍍' ]