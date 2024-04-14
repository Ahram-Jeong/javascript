function execute() {
    console.log('1');
    setTimeout(() => {
        console.log('2');
    }, 3000);
    console.log('3');
}
execute();
// 놀라운 출력 결과 1 -> 3 -> 2
// setTimeout Web API를 통한 비동기적 호출때문