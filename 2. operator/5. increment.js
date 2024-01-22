// 증가 & 감소 연산자 (Increment & Decrement operators)
let a = 0;
console.log(a);
a++; // a = a + 1;
console.log(a);
a--;
console.log(a);

// Caution!
// a++ : 필요한 연산을 하고, 그 후 값을 증가시킴
// ++a : 값을 먼저 증가시키고, 필요한 연산을 함
console.clear();
a = 0;
let b = a++; // 할당 연산 후 증감
console.log(b); // 0
console.log(a); // 1

console.log("*****")
a = 0;
b = ++a; // 증감 후 할당
console.log(b); // 1
console.log(a); // 1