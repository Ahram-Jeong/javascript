// 삼항 조건 연산자 (Ternary operator)
// 조건식 ? true인 경우 : flase인 경우
let fruit = 'cherry';
if (fruit === 'orange') {
    console.log('🍊')
} else {
    console.log('🍰');
}

fruit === 'cherry' ? console.log('🍒') : console.log('🍰'); // 🍒
fruit === 'orange' ? console.log('🍊') : console.log('🍰'); // 🍰

let emoji = fruit === 'orange' ? '🍒' : '🍊';
console.log(emoji); // 🍊