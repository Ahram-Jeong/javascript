/**
 * Shallow Copy (얕은 복사)
 * : 객체는 메모리 주소를 전달, 자바스크립트에서 복사할 때는 항상 얕은 복사가 이루어 짐
 * Array.from, concat, slice, spread(...), Object.assign
 */
const pizza = {name : '🍕', price : 2, owner : {name : 'Ashley'}};
const paella = {name : '🥘', price : 3};
const steak = {name : '🥩', price : 1};

// store1, store2는 서로 다른 배열 객체
const store1 = [pizza, paella];
const store2 = Array.from(store1);
console.log('store1', store1);
console.log('store2', store2);
console.log('=============================================================');

store2.push(steak);
console.log('store1', store1);
console.log('store2', store2);
console.log('=============================================================');

// shallow 예제
pizza.price = 4;
console.log('store1', store1);
console.log('store2', store2);