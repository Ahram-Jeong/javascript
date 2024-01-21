// 단항 연산자 (Unary operators)
// + 양
// - 음
// ! 부정
let a = 12;
a = -a; // -1 * 12
console.log(a); // -12
a = -a;
console.log(a); // 12

a = +a;
console.log(a); // 12

a = -a;
a = +a;
console.log(a); // -12

let boolean = true;
console.log(boolean);
console.log(!boolean); // false
console.log(!!boolean); // true

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인 가능
console.clear();
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'WOODZ'); // NaN (not a number) -> 문자열은 숫자로 변환할 수 없음
console.log(+undefined); // NaN (not a number)

// ! : 부정 연산자
// !! : 값을 boolean 타입으로 변환
console.log(!1); // true의 부정
console.log(!!1); // true의 부정의 부정
