/**
 * 배열의 함수
 * point : 배열 자체를 변경 or 새로운 배열 반환
 */

/**
 * 배열 자체를 변경
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

/**
 * 새로운 배열을 반환
 */
let newArr = fruits.slice(0, 2);
console.log(fruits); // [ '🍋', '🍓', '🍏', '🍍' ]
console.log(newArr); // [ '🍋', '🍓' ]
newArr = fruits.slice();
console.log(newArr); // 배열 전체를 새롭게 반환

// 여러 개의 배열을 이어 붙임
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 배열의 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

console.clear();
// 중첩 배열을 하나의 flat한 배열로 변환
let arr = [
    [1, 2, 3],
    [4, [5, 6]]
];
console.log(arr); // [ [ 1, 2, 3 ], [ 4, [ 5, 6 ] ] ]
console.log(arr.flat()); // 한 단계까지만 flat => [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(arr.flat(2)); // 두 단계 flat => [ 1, 2, 3, 4, 5, 6 ]
arr = arr.flat(2)

/**
 * 특정 값으로 배열 채우기
 * fill() : 배열 자체를 수정
 */
arr.fill(0);
console.log(arr); // [ 0, 0, 0, 0, 0, 0 ]
arr.fill('🍰', 1, 3); // 1 <= i < 3
console.log(arr); // [ 0, '🍰', '🍰', 0, 0, 0 ]
arr.fill('🍕', 1); // 1 <= i
console.log(arr); // [ 0, '🍕', '🍕', '🍕', '🍕', '🍕' ]

// 배열을 문자열로 합치기
let text = arr.join();
console.log(text); // 0,🍕,🍕,🍕,🍕,🍕
text = arr.join(' | ');
console.log(text); // 0 | 🍕 | 🍕 | 🍕 | 🍕 | 🍕