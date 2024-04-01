const fruits = ['🥝', '🥥', '🍇', '🍈'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for 문 대신 고차 함수 사용 (callback 함수)
fruits.forEach(function (value, index, array) {
    console.log('=============');
    console.log('value', value);
    console.log('index', index);
    console.log('array', array);
});
fruits.forEach(function (value) {
    console.log('=============');
    console.log('value', value);
});
fruits.forEach((value) => {
    console.log('value', value);
});
// fruits.forEach((value) => console.log('value', value));

/**
 * 조건(callback 함수)에 맞는 아이템을 찾을 때
 * find() : 제일 처음으로 조건에 맞는 아이템을 반환
 */
const item1 = {name : '🍮', price : 2};
const item2 = {name : '🥨', price : 3};
const item3 = {name : '🍰', price : 1};

const products = [item1, item2, item3, item2];
// const found = products.find((value) => {
//     return value.name === '🥨';
// });
let result = products.find((value) => value.name === '🥨');
console.log(result); // { name: '🥨', price: 3 }

// findIndex() : 제일 처음으로 조건(callback 함수)에 맞는 아이템의 인덱스 반환
result = products.findIndex((value) => value.name === '🥨');
console.log(result); // 1

// 배열의 아이템들이 부분적으로 조건(callback 함수)에 맞는 지 확인
result = products.some((item) => item.name === '🥨');
console.log(result); // true

// 배열의 아이템들이 전부 조건(callback 함수)에 맞는 지 확인
result = products.every((item) => item.name === '🥨');
console.log(result); // false

// *** 조건(callback 함수)에 맞는 모든 아이템들을 새로운 배열로 반환!! ***
result = products.filter((item) => item.name === '🥨');
console.log(result); // [ { name: '🥨', price: 3 }, { name: '🥨', price: 3 } ]

console.clear();

// map() : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result); // [ 2, 4, 6, 8, 10 ]

result = nums.map((item) => {
    if (item % 2 ===0) {
        return item * 2;
    } else {
        return item;
    }
});
console.log(result); // [ 1, 4, 3, 8, 5 ]

// flatMap() : 배열의 각 요소에 주어진 콜백 함수를 적용한 다음 그 결과를 한 단계씩 평탄화하여 형성된 새 배열을 반환 
result = nums.map(item => [1, 2]);
console.log(result); // [ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]
result = nums.flatMap(item => [1, 2]);
console.log(result); // [ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ]

result = ['i', 'love', 'paris'].map((text) => text.split(''));
console.log(result); // [ [ 'i' ], [ 'l', 'o', 'v', 'e' ], [ 'p', 'a', 'r', 'i', 's' ] ]
result = ['i', 'love', 'rome'].flatMap((text) => text.split(''));
console.log(result); // [ 'i', 'l', 'o', 'v', 'e', 'r', 'o', 'm', 'e' ]

// sort() : 배열의 요소를 적절한 위치에 오름차순으로 정렬한 후 그 배열을 반환 (기존 배열 반환)
const texts = ['hello', 'abc'];
texts.sort();
console.log(texts); // [ 'abc', 'hello' ]

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort(); // 숫자 => 문자로 변환되어 정렬
console.log(numbers); // [ 0, 1, 10, 2, 4, 5 ]

/**
 * 조건(callback 함수)의 결과가
 * < 0 이면, a가 앞으로 정렬, 오름차순
 * > 0 이면, b가 앞으로 정렬, 내림차순
 */
numbers.sort((a, b) => a - b);
console.log(numbers); // [ 0, 1, 2, 4, 5, 10 ]

// reduce() : 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 최종적으로 하나의 결과 값을 반환
/*
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
   sum += value;
   return sum;
}, 0); // initialValue = 0
 */
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result); // 15