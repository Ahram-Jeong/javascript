/**
 * Q1 : 배열의 중복 제거
 * 결과 : ['🍌', '🍎', '🍇', '🍑']
 */
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
function removeDuplication(array) {
    return [...new Set(array)]; // set으로 중복 제거 해버리고 다시 배열로 반환
}
console.log(removeDuplication(fruits));

/**
 * Q2 : 주어진 두 set의 공통 값만 담고 있는 set 만들기
 */
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
function findIntersection(set1, set2) {
    return new Set([...set1].filter(item => set2.has(item)));
}
console.log(findIntersection(set1, set2)); // Set(3) { 1, 2, 3 }