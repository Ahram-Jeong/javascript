// 1. 문자열의 모든 캐릭터를 하나씩 출력
const text = 'Hello WOODZ!';
for(let i = 0; i < text.length; i++) {
    console.log(text[i]);
}


// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user01, user02, user03, user04';
// ['user01', 'user02', 'user03', 'user04']
console.log(ids.split(', '));


// 3. 1초에 한 번씩 시계를 출력 (날짜 포함)
const printTime = setInterval(() => {
    console.log(Date().toLocaleString('ko-KR'));
}, 1000);

setTimeout(() => {
    clearInterval(printTime);
    console.log('stop!🙈');
}, 5000);