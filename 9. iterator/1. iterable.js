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

const iterator = array.values();
/*for (const item of iterator) {
    console.log(item); // 1 2 3
}*/

console.log('next() 호출', iterator.next()); // { value: 1, done: false } => 값 (value), 반복 종료 여부 (done)
console.log('next() 호출', iterator.next().value); // 2
console.log('next() 호출', iterator.next().value); // 3
console.log('next() 호출', iterator.next()); // { value: undefined, done: true }

const fruits = ['🍉', '🍍', '🍒'];
const iterator2 = fruits.values();
while (true) {
    const item = iterator2.next();
    if (item.done) { // done: true 이면
        break;
    }
    console.log(item.value); // done: false 이면, value 출력
}