// 논리 연산자 (Logical operator)
// && : 그리고
// || : 또는
// ! : (단항 연산자) 부정
// !! : (단항 연산자 응용) boolean 값으로 변환

let num = 11;

if (!(num >= 0 && num < 9)) {
    console.log('🤗');
}

if (num >= 0 || num < 20) {
    console.log('😛');
}

if (num != 8) {
    console.log('😎');
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!'woodz'); // false
console.log(!!'woodz'); // true
