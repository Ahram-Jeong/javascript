/**
 * 변수 규칙!
 * 라틴 문자 (0-9, a-z, A-Z), _
 * 대소문자를 구분
 * 추천 : camelCase (likeThis)
 * 한국어 x, 예약어 x, 숫자로 시작 x, 특수 문자 x (_, $ 두 가지는 예외), 이모지 x
 * 여러개의 변수를 1, 2, 3.. 숫자로 구분 XXX -> 최대한 의미있게, 구체적인 이름으로 작성!
 */
let apple;
let redApple;

// 나쁜 예제
let number = 20;
let audio1;
let audio2;

// 좋은 예제
let myAge = 20;
let backgroundAudio;
let windAudio;

// 꿀팁!
let audioBackground;
let audioWind;