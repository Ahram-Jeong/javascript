/**
 * const multiple = {
 *     // 1. iterator 호출
 *     [Symbol.iterator]() {
 *         const max = 10;
 *         let num = 0;
 *         // 2. obj 반환
 *         return {
 *             next() {
 *                 return { value : num++ * 2, done : num > max };
 *             }
 *         }
 *     }
 * }
 */

function* multipleGenerator() {
    try {
        for (let i = 0; i < 10; i++) {
            console.log(i);
            yield i ** 2;
        }
    } catch (error) {
        console.log(error);
    }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done); // 0 false

next = multiple.next();
console.log(next.value, next.done); // 1 false

// multiple.return();
multiple.throw('Error!!!'); // try-catch에서 잡게 됨

next = multiple.next();
console.log(next.value, next.done); // multiple.return() 의 결과 👉 undefined true