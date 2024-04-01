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