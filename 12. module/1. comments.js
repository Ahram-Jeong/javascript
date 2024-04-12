// 주석 (Comments)
// 한 줄짜리 주석 용
// ToDo (Ashley) : 해야 할 일 작성 (ex. ** 기능 구현)

/**
 * 주석은 코드 자체를 설명하는 것이 아니라, 왜(WHY)와 어떻게(HOW)를 설명하는 것이 좋음
 * 단, 정말 필요한 경우에만
 * 외부에서 많이 쓰이는 함수 API인 경우, JSDoc을 사용하면 좋음
 */

/**
 * 주어진 두 인자를 더한 값을 반환 함
 * @param a 정수 1
 * @param b 정수 2
 * @returns {*} a와 b를 더한 값
 */
function add(a, b) {
    return a + b;
}