// UTC 기준 (협정 세계 시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리 초 단위로 표기)
console.log(new Date());
console.log(new Date('May 5, 2023'));
console.log(new Date('2023-12-15T03:24:00'));

console.log(Date.now());
console.log(Date.parse('2023-12-15T03:24:00')); // 1702578240000

const now = new Date();
now.setFullYear(2030);
now.setMonth(9); // month는 0부터 시작
console.log(now.getFullYear()); // 2030
console.log(now.getDate());
console.log(now.getDay()); // 0 : 일... 6 : 토
console.log(now); // 2030-10-27T10:13:21.878Z

console.log(now.toString()); // Sun Oct 27 2030 19:19:53 GMT+0900 (대한민국 표준시)
console.log(now.toDateString()); // Sun Oct 27 2030
console.log(now.toTimeString()); // 19:21:16 GMT+0900 (대한민국 표준시)
console.log(now.toISOString()); // 2030-10-27T10:21:16.090Z -> ISO 8601 형식
console.log(now.toLocaleString('en-US')); // 10/27/2030, 7:22:38 PM
console.log(now.toLocaleString('fr-FR')); // 27/10/2030 19:23:40
console.log(now.toLocaleString('ko-KR')); // 2030. 10. 27. 오후 7:22:38