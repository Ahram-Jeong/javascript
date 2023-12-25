// 불리언 타입
let tr = true;
let fs = false;
console.log(fs);
console.log(tr);

// 활용 예
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isEnrolled);

console.clear();
// 느낌표 두 개를 붙이면 값을 boolean 타입으로 변환 가능
// Falshy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

console.log('*****');
// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'woodz');
console.log(!!{});
console.log(!!Infinity);