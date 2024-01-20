// copy by value : 원시 타입(primitive)은 값이 복사되어 전달 됨
let a = 1;
let b = a; // 1
console.log(a);
console.log(b);

b = 2;
console.log(a);
console.log(b);


// copy by reference : 객체 타입(object)은 참조 값 (메모리 주소, 레퍼런스)이 복사되어 전달 됨
let woodz = { // 0x1234
    name : 'woodz',
    color : 'orange, blue',
    display : '🧡💙'
};
let orange = woodz; // 0x1234
console.log(woodz);
console.log(orange);

orange.name = '조승연';
console.log(woodz);
console.log(orange);