/**
 * Q1 : 주어진 배열 내 딸기를 키위로 교체하는 함수를 만들기
 * 단, 주어진 배열을 수정하지 않도록!
 * input: ['🍌', '🍓', '🍇', '🍓']
 * output: [ '🍌', '🥝', '🍇', '🥝' ]
 */

// 💡 Q1 모범 답안
// 재사용성이 높은 코드 : 무엇을 바꾸고 싶은지 최대한 외부로부터 주입받을 수 있는 것이 좋음
function replace(array, from, to) {
    return array.map(item => item === from ? to : item);
}
const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log('Q1 답', result);

/**
 * Q2 : 배열과 특정한 요소를 전달받아, 배열 내 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
 * input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
 * output: 2
 */

// 💡 Q2 모범 답안
// 재사용성이 높은 코드 : 무엇을 바꾸고 싶은지 최대한 외부로부터 주입받을 수 있는 것이 좋음
function count(array, item) {
    return array.filter((value) => value === item).length;
/*    return array.reduce((count, value) => {
        if (value === item) {
            count++;
        }
        return count;
    }, 0);*/
}
console.log('Q2 답', count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

/**
 * Q3 : 배열1, 배열2 두 개의 배열을 전달받아, 배열1 아이템 중 배열2에 중복되는 아이템만 담고 있는 배열 반환
 * input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
 * output: [ '🍌', '🍇' ]
 */

// 💡 Q3 모범 답안
// 재사용성이 높은 코드 : 무엇을 바꾸고 싶은지 최대한 외부로부터 주입받을 수 있는 것이 좋음
function match(array1, array2) {
    return array1.filter(item => array2.includes(item));
}
console.log('Q3 답', match(['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']));

/**
 * Q4 : 5 보다 큰 숫자들의 평균 구하기
 */

// 💡 Q4 모범 답안
const nums = [3, 16, 5, 25, 4, 34, 21];
const result2 = nums.filter((num) => num > 5) // [16, 25, 34, 21]
                            .reduce((avg, num, _, array) => avg + num / array.length, 0);
console.log('Q4 답', result2);
