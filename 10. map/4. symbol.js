/**
 * Symbol : 유일한 키를 생성할 수 있음
 * 생성자가 symbol 원시 값을 반환하는 내장 객체
 * symbol 원시 값은 심볼 값, 혹은 짧게 심볼이라고만 부르며 고유함이 보장
 * 심볼은 객체에 속성을 추가할 때 고유한 키를 부여하여 다른 코드와 충돌하지 않도록 할 때 많이 쓰이며,
 * 이렇게 추가한 속성은 일반적인 방법으로는 접근할 수 없으므로 약한 형태의 캡슐화, 혹은 정보 은닉을 제공
 * 모든 Symbol() 호출은 각각 고유한 심볼을 반환하는 것이 보장 됨
 */
const map = new Map();
const key1 = 'woodz';
const key2 = 'woodz';
map.set(key1, '조승연');
console.log(map.get(key2)); // 조승연 => 원시 타입이라 값이 똑같으면 동일한 key라고 간주하기 때문
console.log(key1 === key2); // true

const key3 = Symbol('우즈');
const key4 = Symbol('우즈');
map.set(key3, '조승연');
console.log(map.get(key4)); // undefined
console.log(key3 === key4); // false

/**
 * Symbol.for(key) : 주어진 키를 사용해 런타임 범위의 심볼 레지스트리(전역 심볼 레지스트리, Global Symbol Registry)에서 존재하는 심볼을 찾고
 * 존재할 경우 이를 반환 (동일한 키, 동일한 심볼)
 * 존재하지 않는 경우에는 해당 키를 사용해 전역 심볼 레지스트리에 새로운 심볼을 생성
 */
const k1 = Symbol.for('WOODZ 조승연');
const k2 = Symbol.for('WOODZ 조승연');
console.log(k1 === k2); // true
console.log(Symbol.keyFor(k1)); // WOODZ 조승연 => 전역 심볼 레지스트리에 보관된 Symbol에 한해서만 keyFor(key) 가능
console.log(Symbol.keyFor(key3)); // undefined

const obj = {
    [k1] : 'Hello',
    [Symbol('key')] : 1
};
console.log(obj); // { [Symbol(WOODZ 조승연)]: 'Hello', [Symbol(key)]: 1 }
console.log(obj[k1]); // Hello
console.log(obj[Symbol('key')]); // undefined => obj의 Symbol과 다른 Symbol이므로 출력 불가

const symbolKey = Symbol('key');
const obj1 = {
    [k1]: 'Hello',
    [symbolKey]: 1
};
console.log(obj1[k1]);
console.log(obj1[symbolKey]); // 1 => 동일한 Symbol 인스턴스이므로 1 출력 가능