/**
 * Q1 : 주어진 배열 내 딸기를 키위로 교체하는 함수를 만들기
 * 단, 주어진 배열을 수정하지 않도록!
 * input: ['🍌', '🍓', '🍇', '🍓']
 * output: [ '🍌', '🥝', '🍇', '🥝' ]
 */
const fruits1 = ['🍌', '🍓', '🍇', '🍓'];
let fruits2 = Array.from(fruits1);
for (let i = 0; i < fruits1.length; i++) {
    if (fruits1[i] === '🍓') {
        fruits2[i] = '🥝';
    }
}
// console.log(fruits1);
console.log(fruits2);

// 💡 Q1 모범 답안
// 재사용성이 높은 코드 : 무엇을 바꾸고 싶은지 최대한 외부로부터 주입받을 수 있는 것이 좋음
function replace(array, from, to) {
    const replaced = Array.from(array);
    for (let i = 0; i < replaced.length; i++) {
        if (replaced[i] === from) {
            replaced[i] = to;
        }
    }
    return replaced;
}
const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log('Q1', result);

/**
 * Q2 : 배열과 특정한 요소를 전달받아, 배열 내 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
 * input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
 * output: 2
 */
const fruits3 = ['🍌', '🥝', '🍇', '🥝'];
let count = 0;
for (let i = 0; i < fruits3.length; i++) {
    if (fruits3[i] === '🥝') {
        count++;
    }
}
console.log(count);

// 💡 Q2 모범 답안
// 재사용성이 높은 코드 : 무엇을 바꾸고 싶은지 최대한 외부로부터 주입받을 수 있는 것이 좋음
function countItem(array, item) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            counter++;
        }
    }
    return counter;
}
console.log('Q2', countItem(['🍌', '🥝', '🍇', '🥝'], '🥝'));

/**
 * Q3 : 배열1, 배열2 두 개의 배열을 전달받아, 배열1 아이템 중 배열2에 중복되는 아이템만 담고 있는 배열 반환
 * input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
 * output: [ '🍌', '🍇' ]
 */
const fruits4 = ['🍌', '🥝', '🍇'];
const fruits5 = ['🍌', '🍓', '🍇', '🍓'];
let fruits6 = [];
for (let i = 0; i < fruits4.length; i++) {
    for (let j = 0; j < fruits5.length; j++) {
        if (fruits4[i] === fruits5[j]) {
            fruits6.push(fruits4[i]);
        }
    }
}
console.log(fruits6);

// 💡 Q3 모범 답안
// 재사용성이 높은 코드 : 무엇을 바꾸고 싶은지 최대한 외부로부터 주입받을 수 있는 것이 좋음
function match(array1, array2) {
    const result = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                result.push(array1[i]);
            }
        }
    }
    return result;
}
console.log('Q3', match(['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']));