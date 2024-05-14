/**
 * 자바스크립트의 함수는 만능, 함수와 생성자 함수(in 클래스)로 사용 가능
 * BUT, 불필요하고 무거운 prototype(많은 데이터를 담고 있는 객체)이 생성 됨
 */
const dog = {
    name : '금동',
    // 객체 안에서 함수를 선언하는 것은 나쁜 코드!!!
    play : function () {
    // play : () => { // arrow 함수도 생성자 함수로 사용 불가
        console.log('논다개');
    }
};
dog.play();

const obj = new dog.play(); // 나쁜 코드!!!
console.log(obj); // play {}

// ES6 -> 메소드 사용
const cat = {
    name : '우즈',
    // 객체의 메소드 -> 오브젝트에 속한 함수
    play() {
        console.log('meow');
    }
};
cat.play();
// const obj1 = new cat.play(); // TypeError: cat.play is not a constructor, 메소드는 생성자 함수로 사용 불가

/**
 * 1. this, arguments, super에 대한 자체 바인딩이 없으며 정적으로 결정 됨
 *  - this의 경우, 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩 됨
 * 2. 생성자로 사용 불가, 새로운 것으로 호출하면 TypeError가 발생 (무거운 prototype을 만들지 않음), 또한 new.target 키워드에 액세스 불가
 * 3. 함수 내부에서 yield를 사용할 수 없으며 제너레이터 함수로 생성 불가
 */

function sum(a, b) {
    // arguments 객체 : 함수에 전달된 인수에 해당하는 Array 형태의 객체, 모든 함수 내에서 이용 가능한 지역 변수
    console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
}
sum(1, 2);

const add = (a, b) => {
    console.log(arguments);
    // arrow 함수에서 arguments는 arrow 함수 외부의 arguments를 참조만 함
};
add(1, 2);

const printArrow = () => {
    console.log(this); // 전역 스코프를 가리킴 => globalThis
};
printArrow();
cat.printArrow = printArrow;
cat.printArrow(); // {}