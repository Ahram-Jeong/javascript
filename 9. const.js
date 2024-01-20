// let : 재할당 가능
let a = 1;
a = 2;

// const : 재할당 불가능
// 1. 상수
// 2. 상수변수 or 변수
const text = 'Woodz';
// text = '우즈'; -> 불가능
console.log(text);

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 or 변수
const orange = {
    name : '오렌지',
    color : 'orange',
    display : '🍊'
};
// orange = {}; -> 불가능
console.log(orange);
orange.name = '조승연';
orange.display = '🦊';
console.log(orange);
// const 객체는 주소 값만 재할당 불가능, 그러나 object 변경은 가능
