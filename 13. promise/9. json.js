/**
 * JSON : JavaScript Object Notation, JSON을 분석하거나 값을 JSON으로 변환하는 메서드를 가지고 있음
 * 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한 오브젝트 형태의 텍스트 포맷, 두 개의 메소드만 존재
 *
 * 1. JSON.parse() : JSON -> Object
 * 문자열을 JSON으로서 구문 분석하고, 선택적으로 분석 결과의 값과 속성을 변환해 반환
 * 2. JSON.stringify() : Object -> JSON
 * 주어진 값에 해당하는 JSON 문자열을 반환
 * 객체의 프로퍼티만 JSON 문자열로 반환하고, function은 포함하지 않음
 */

const woodz = {
    name : '조승연',
    age : 27,
    eat : () => {
        console.log('🍕');
    }
};

// 직렬화 (Serialize) : 객체를 문자열로 변환
const json = JSON.stringify(woodz);
console.log(woodz); // { name: '조승연', age: 27, eat: [Function: eat] }
console.log(json); // {"name":"조승연","age":27}

// 역직렬화 (Deserialize) : 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj); // { name: '조승연', age: 27 }