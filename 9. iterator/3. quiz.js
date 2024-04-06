/**
 * Q1 : 0 <= number < 10 까지 숫자의 2배를 순회하는 iterator (반복자) 만들기
 *  0, 1, 2, 3 ... 9
 *  0, 2, 4, 6 ... 18
 *  [Symbol.iterator](): Iterator{ next(): {value, done} };
 */

function makeIterable(initValue, maxValue, callback) {
    return {
        // 1. iterator 호출
        [Symbol.iterator]() {
            // 2. obj 반환
            return {
                next() {
                    return { value : callback(initValue++), done : initValue > maxValue };
                }
            }
        }
    }
}

const multiple = makeIterable(0, 10, (n) => n * 2);
for (const num of multiple) {
    console.log(num);
}

const single = makeIterable(0, 10, (n) => n);
for (const num of single) {
    console.log(num);
}