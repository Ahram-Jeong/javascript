/**
 * Object.freeze() : 객체를 동결, 동결된 객체는 더 이상 변경될 수 없음
 * 동결 객체는 그 프로토타입이 변경되는것도 방지
 * freeze()는 전달된 동일한 객체를 반환
 * 추가 X, 수정 X, 삭제 X, 속성 재정의 X
 */

const ash = { name : 'Ashley' };
const woodz = { name : '조승연', emoji : '🦊', owner : ash };
Object.freeze(woodz);
// 아래 코드들 모두 변경이 안되는 것을 확인 가능
woodz.name = '우즈';
console.log(woodz); // { name: '조승연', emoji: '🦊', owner: { name: 'Ashley' } }
woodz.age = 27;
console.log(woodz);
delete woodz.name;
console.log(woodz);

// 참조된 객체는 변경 가능
ash.name = '애슐리';
console.log(woodz); // { name: '조승연', emoji: '🦊', owner: { name: '애슐리' } }

/**
 * Object.seal() : 객체를 밀봉, 객체를 밀봉하면 그 객체에는 새로운 속성을 추가할 수 없고, 현재 존재하는 모든 속성을 설정 불가능 상태로 만들어 줌
 * 하지만 쓰기 가능한 속성의 값은 밀봉 후에도 변경할 수 있음
 * 추가 X, 값의 수정 O, 삭제 X, 속성 재정의 X
 */

const cat = { ...woodz };
// Object.assign(cat, woodz);
Object.seal(cat);

console.log(cat);
cat.name = '우즈';
console.log(cat); // { name: '우즈', emoji: '🦊', owner: { name: '애슐리' } }
delete cat.emoji;
console.log(cat); // { name: '우즈', emoji: '🦊', owner: { name: '애슐리' } }

console.log(Object.isFrozen(woodz)); // true
console.log(Object.isSealed(cat)); // true

/**
 * Object.preventExtensions() : 새로운 속성이 이제까지 객체에 추가되는 것을 방지
 * 추가만 X
 */

const orange = { name : '오렌지' };
Object.preventExtensions(orange);
console.log(Object.isExtensible(orange)); // false

orange.name = '어륀지';
console.log(orange); // { name: '어륀지' }
delete orange.name;
console.log(orange); // {}
orange.age = 20;
console.log(orange); // {}
