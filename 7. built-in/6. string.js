const textObj = new String('Hello WOODZ');
const text = 'WOODZ';
const txt = 'i love orange!';

console.log(textObj);
console.log(text);

console.log(text.length); // 5
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf('D')); // 3
console.log(text.indexOf('O')); // 1
console.log(text.lastIndexOf('O')); // 2

console.log(text.includes('tx')); // false
console.log(text.includes('w')); // false
console.log(text.includes('W')); // True

console.log(text.startsWith('WOO')); // True
console.log(text.endsWith('Z')); // True

console.log(txt.toUpperCase());
console.log(text.toLowerCase());

console.log(txt.substring(7, 13)); // orange
console.log(txt.slice(2)); // love orange!
console.log(txt.slice(-7)); // orange!

const space = '            WOODZ is a cat           ';
console.log(space.trim()); // 앞, 뒤 공백 제거 -> WOODZ is a cat

const longText = 'Do not, disturb';
console.log(longText.split(' ')); // 구분자로 끊어서 배열로 반환 -> [ 'Do', 'not,', 'disturb' ]
console.log(longText.split(' ', 2)); // [ 'Do', 'not,' ]
console.log(longText.split(',', 2)); // [ 'Do not', ' disturb' ]
console.log(longText.split(', ', 2)); // [ 'Do not', 'disturb' ]
