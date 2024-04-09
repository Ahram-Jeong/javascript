/**
 * 논리 연산자 (Logical Operators) : &&, || 등
 * 단축 평가 (short-circuit evaluation)
 */
const obj1 = { name : '🐷' };
const obj2 = { name : '🦊', owner : 'WOODZ' };

if (obj1 && obj2) {
    console.log('둘 다 TRUE');
}

// 단축 평가
let result = obj1 && obj2;
console.log(result); // { name: '🦊', owner: 'WOODZ' } => obj1이 true이므로 obj2 자체를 result에 할당
let result2 = obj1 || obj2;
console.log(result2); // { name: '🐷' }

/**
 * 활용 예
 * 조건이 truthy 일 때 && 무언가를 해야 할 경우
 * 조건이 falshy 일 때 || 무언가를 해야 할 경우
 */
function changeOwner(animal) {
    if (!animal.owner) {
        throw new Error('CRASH💥 : 주인 없음');
    }
    animal.owner = '바뀐 주인! - Ashley';
}
function makeNewOwner(animal) {
    if (animal.owner) {
        throw new Error('CRASH💥 : 주인 있음');
    }
    animal.owner = '새로운 주인! - 조승연';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1); // { name: '🐷' }
console.log(obj2); // { name: '🦊', owner: '바뀐 주인! - Ashley' }

obj1.owner || makeNewOwner(obj1); // { name: '🐷', owner: '새로운 주인! - 조승연' }
obj2.owner || makeNewOwner(obj2); // { name: '🦊', owner: '바뀐 주인! - Ashley' }
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할 때
let item; // = { price : 1 };
const price = item && item.price;
console.log(price); // undefined

let woodz = { name : '조승연' };
const name = woodz && woodz.name;
console.log(name); // 조승연

/**
 * 기본 값 설정
 * default parameter - print(message = '메시지') 로 설정할 경우 => 빈 값이거나 undefined인 경우에만 적용
 * || 값이 falshy 인 경우 모두 적용 (할당) : 0, -0, null, undefined, ''
 */
function print(message) {
    const text = message || '명창 고양이'; // 기본 값 설정 => '', undefined, null, 0에 적용 가능
    console.log(text);
}
print(); // 명창 고양이
print(undefined); // 명창 고양이
print(null); // 명창 고양이
print(0); // 명창 고양이
print('Meow'); // Meow