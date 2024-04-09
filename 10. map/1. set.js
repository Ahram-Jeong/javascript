// Set
const set = new Set([1, 2, 3]);
console.log(set); // Set(3) { 1, 2, 3 }
console.log(set.size); // 3
console.log(set.has(2)); // true
console.log(set.has(6)); // false

// 순회
set.forEach(item => console.log(item));
console.log(set.values()); // [Set Iterator] { 1, 2, 3 }
for (const value of set.values()) {
    console.log(value);
}

// 추가 (중복X)
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 }
set.add(6); // 중복 값 추가
console.log(set); // Set(4) { 1, 2, 3, 6 } 중복X

// 삭제
set.delete(6);
console.log(set); // Set(3) { 1, 2, 3 }

// 전부 삭제
set.clear();
console.log(set); // Set(0) {}

// 오브젝트 set
const obj1 = { name : '🍋', price : 5 };
const obj2 = { name : '🍓', price : 8 };
const objs = new Set([obj1, obj2]);
console.log(objs); // Set(2) { { name: '🍋', price: 5 }, { name: '🍓', price: 8 } }

obj1.price = 10;
objs.add(obj1);
console.log(objs); // Set(2) { { name: '🍋', price: 10 }, { name: '🍓', price: 8 } }

const obj3 = { name : '🍓', price : 8 };
objs.add(obj3);
console.log(objs); // Set(3) { { name: '🍋', price: 10 }, { name: '🍓', price: 8 }, { name: '🍓', price: 8 } }
obj3.price = 3;
console.log(objs); // Set(3) { { name: '🍋', price: 10 }, { name: '🍓', price: 8 }, { name: '🍓', price: 3 } }