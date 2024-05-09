/**
 * closure : 클래스의 private 필드 또는 메소드를 사용하는 효과와 동일
 * 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해 사용 -> 캡슐화, 정보 은닉
 */

// closure 사용 예
function makeCounter() {
    let count = 0;
    function increase() {
        count++;
        console.log(count);
    }
    return increase;
}

const plus = makeCounter();
plus(); // 1
plus(); // 2
plus(); // 3

// 최신 JS 클래스 사용!
class Counter {
    #count = 0;
    increase() {
        this.#count++;
        console.log(this.#count);
    }
}
const counter = new Counter();
counter.increase(); // 1