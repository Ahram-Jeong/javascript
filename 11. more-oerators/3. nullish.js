/**
 * 널 병합 연산자 (Nullish coalescing operator)
 * (??)
 * ES11에서 추가, 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자
 * ?? null, undefined
 * || falshy (0, -0, '') 한 경우 할당 됨
 */

let num = 0; // 0 이므로 false
console.log(num || '-1'); // -1
console.log(num ?? '-1'); // 0
