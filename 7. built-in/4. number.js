const num1 = 9999; // 원시 타입
const num2 = new Number(9999); // 객체 타입
console.log(typeof num1); // -> number
console.log(typeof num2); // -> object

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if (num1 < Number.MAX_VALUE) {

}
if (Number.isNaN(num1)) {

}

// 지수 표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 1004;
console.log(num3.toExponential()); // -> 1.004e+3

// 반올림 하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); // -> 1234
console.log(num4.toString()); // -> '1234.12'
console.log(num4.toLocaleString('ar-EG'));
// 원하는 자릿 수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); // -> 1234.1
console.log(num4.toPrecision(4)); // -> 1234
console.log(num4.toPrecision(2)); // -> 1.2e+3, 전체 자릿 수 표기가 안될 때는 지수 표기법으로 반환

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
    console.log(Number.EPSILON); // -> 2.220446049250313e-16, 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자
}

const num = 0.1 + 0.2 - 0.2; // 0.10000000000000003, 미묘한 차이 발생
console.log(num);

function isEqual(original, expected) {
    return Math.abs(original - expected) < Number.EPSILON;
}

console.log(isEqual(1, 1)); // true
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(num, 0.1)); // true