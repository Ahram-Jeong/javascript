/**
 * Destructuring Assignment (구조 분해 할당) : 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식
 * 데이터를 쉽게 그룹화 할 수 있다.
 */

const fruits = [ '🍈', '🍑', '🍇', '🍋' ];
const [first, second, ...others] = fruits;
console.log(first); // 🍈
console.log(second); // 🍑
console.log(others); // [ '🍇', '🍋' ]

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

function createEmoji() {
    return ['orange', '🍊'];
}

const [title, emoji] = createEmoji();
console.log(title); // orange
console.log(emoji); // 🍊

const woodz = { name : '조승연', age : 27, job: 'artist' };
function display({name, age, job}) {
    console.log('이름 : ', name);
    console.log('나이 : ', age);
    console.log('직업 : ', job);
}
display(woodz);

const { name, age, job: occupation, signature = '🦊' } = woodz;
console.log(name); // 조승연
console.log(age); // 27
console.log(occupation); // artist
console.log(signature); // 🦊

// 구조 분해 할당 Quiz
const prop = {
    name: 'Button',
    styles: {
        size: 20,
        color: 'black'
    }
};

function changeColor({ styles : { color } }) {
    console.log(color);
}
changeColor(prop);