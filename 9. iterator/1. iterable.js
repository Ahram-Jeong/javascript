/**
 * Iterable : 순회, 반복 가능 한
 * [Symbol.iterator]() : Iterator;
 * Symbol 정의를 가진 객체나 특정 함수가 Iterator를 리턴하는 것은 순회 가능한 객체라는 뜻
 * 순회가 가능하면 for..of, spread 연산자 사용 가능
 */
const array = [1, 2, 3];
for (const item of array) {
    console.log(item);
}
console.log('👆 동일 👇');
for (const item of array.values()) {
    console.log(item);
}
for (const item of array.entries()) {
    console.log(item);
}
for (const item of array.keys()) {
    console.log(item);
}

const obj = {0 : 1, 1 : 2}; // obj is not iterable, for..of 대신에 for..in 사용 가능
for (const item in obj) { // obj 안의 key를 출력
    console.log(item); // 0 1
}