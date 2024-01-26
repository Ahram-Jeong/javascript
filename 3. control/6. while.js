// 반복문 while
// while (조건) {}
// 조건의 false가 될 때까지 {} 코드를 반복 실행

let num = 5;
while (num >= 0) {
    console.log(num);
    num--;
}

let isActive = false;
let i = 0;
while (isActive) {
    console.log('still alive!🤡');
    if (i === 5) {
        break;
    }
    i++;
}

do {
    console.log('do-while is still alive!🤡');
} while (isActive);