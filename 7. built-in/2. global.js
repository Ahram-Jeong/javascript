console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 99; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.15')); // 12.15
console.log(parseInt('12.15')); // 12

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함, 한글이나 특수문자는 이스케이프 처리해야 함
const URL = 'https://명창고양이.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아닌 부분적인 것은 Component 이용
const part = '우즈.com';
console.log(encodeURIComponent(part));
