// 퀴즈!
let num = 2;

// num이 짝수이면 👍, 홀수이면 👎 출력

// 1. if
if (num%2 === 0) {
    console.log('👍');
} else {
    console.log('👎');
}

// 2. ternary
// num%2 === 0 ? console.log('👍') : console.log('👎');
let emoji = num%2 === 0 ? '👍' : '👎';
console.log(emoji);