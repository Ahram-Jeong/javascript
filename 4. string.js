// 문자열 타입
let string = '조승연';
console.log(string);
string = `Woodz`;
console.log(string);

// 특수 문자 출력
string = "'우즈락하자!'";
console.log(string);

string = 'Hello, \n승연아!\t\t군면제 가자!\\';
console.log(string);
string = '\u09AB';
console.log(string);

// 템플릿 리터럴 (Template Literal) ``
let id = '우즈';
let greetings = "'안녕! " + id + "\n즐거운 하루 보내요:)'";
console.log(greetings);

greetings = `"안녕! ${id},
즐거운 하루 보내요:)"`
console.log(greetings);