/**
 * 옵셔널 체이닝 연산자 (Optional Chaining Operator)
 * (?.)
 * ES11에서 추가, 체인의 각 참조가 유효한지 명시적으로 검증하지 않고, 연결된 객체 체인 내에 깊숙이 위치한 속성 값을 읽을 수 있음
 * (?.) 연산자는 (.) 체이닝 연산자와 유사하게 작동하지만, 만약 참조가 nullish (null 또는 undefined)이라면
 * 에러가 발생하는 것 대신에 표현식의 리턴 값은 undefined로 단락
 * 함수 호출에서 사용될 때, 만약 주어진 함수가 존재하지 않는다면 undefined를 리턴
 */


// null 또는 undefined인 경우를 확인할 때
let item = { price : 1 };
const price = item ?.price; // item이 존재하면 price 정보에 접근하고 없다면 undefined
console.log(price);

let obj = { name : '🍕', owner : { name : '우즈' } };
function printName(object) {
    // const ownerName = obj && obj.owner && obj.owner.name;
    const ownerName = obj ?.owner ?.name; // obj가 있다면 owner에 접근, owner가 있다면 name에 접근 => 훨씬 간편
    console.log(ownerName);
}
printName(obj); // 우즈