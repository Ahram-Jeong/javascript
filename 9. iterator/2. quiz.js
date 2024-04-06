/**
 * Q1 : 0 <= number < 10 까지 숫자의 2배를 순회하는 iterator (반복자) 만들기
 *  0, 1, 2, 3 ... 9
 *  0, 2, 4, 6 ... 18
 *  [Symbol.iterator](): Iterator{ next(): {value, done} };
 */

const multiple = {
    // 1. iterator 호출
    [Symbol.iterator]() {
        const max = 10;
        let num = 0;
        // 2. obj 반환
        return {
            next() {
                return { value : num++ * 2, done : num > max };
            }
        }
    }
}

for (const num of multiple) {
    console.log(num);
}