// Wrapper Object : 원시 값을 필요에 따라 관련된 내장 객체로 변환, 원시 타입의 값을 감싸는 형태의 객체
const number = 9999; // number 원시 타입
// 원시 타입의 값(number)을 감싸는 형태의 객체(Number 객체)
// 래퍼 객체는 프로퍼티를 참조할 때 생성되며 프로퍼티 참조가 끝나면 사라진다.
console.log(number.toString()); // Number 객체
console.log(number); // number 원시 타입

const text = 'woodz ';
console.log(text); // string 원시 타입
console.log(text.length); // String 객체
console.log(text.trim()); // String 객체
