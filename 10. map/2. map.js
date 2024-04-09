// Map
const map = new Map([
    ['key1', '🍑'],
    ['key2', '🍈'],
]);
console.log(map); // Map(2) { 'key1' => '🍑', 'key2' => '🍈' }

console.log(map.size); // 2
console.log(map.has('key1')); // true
console.log(map.has('key3')); // false

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys()); // [Map Iterator] { 'key1', 'key2' }
console.log(map.values()); // [Map Iterator] { '🍑', '🍈' }
console.log(map.entries()); // [Map Entries] { [ 'key1', '🍑' ], [ 'key2', '🍈' ] }

// 찾기
console.log(map.get('key1')); // 🍑
console.log(map.get('key2')); // 🍈
console.log(map.get('key4')); // undefined

// 추가
map.set('key3', '🍇');
console.log(map); // Map(3) { 'key1' => '🍑', 'key2' => '🍈', 'key3' => '🍇' }

// 삭제
map.delete('key3');
console.log(map); // Map(2) { 'key1' => '🍑', 'key2' => '🍈' }

// 전부 삭제
map.clear();
console.log(map); // Map(0) {}

// 오브젝트와 차이점
const key = { name : 'woodz', age : 27 };
const woodz = { name : 'woodz', age : 27, description : '조승연' };

const obj = {
    [key] : woodz
};
console.log('객체', obj); // { '[object Object]': { name: 'woodz', age : 27, description: '조승연' } }

const map2 = new Map([[key, woodz]]);
console.log(map2);
/**
 * Map(1) {
 *   { name: 'woodz', age : 27 } => { name: 'woodz', age : 27, description: '조승연' }
 * }
 */

console.log(obj[key]); // { name: 'woodz', age : 27, description: '조승연' }
console.log(map2.get(key)); // { name: 'woodz', age : 27, description: '조승연' }