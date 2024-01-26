// 조건문 (Conditional Statement)
// if (조건) {}
// if (조건) {} else {}
// if (조건1) {} else if (조건2) {} else {}
let fruit = 'cherry';
if (fruit === 'orange') {
    console.log('🍊')
} else if (fruit === 'cherry') {
    console.log('🍒');
} else {
    console.log('🍰');
}

if (0) { // 조건이 false면 건너 뜀
    console.log('no print!');
}