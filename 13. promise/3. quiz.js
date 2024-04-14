/**
 * Q : 주어진 seconds(초)가 지나면 callback 함수를 호출
 * 단, seconds(초)가 0보다 작으면 에러 발생
 */
function runInDelay(callback, seconds) {
    if (!callback) {
        throw new Error('callback 함수를 전달하세요.');
    }
    if (!seconds || seconds < 0) {
        throw new Error('seconds는 0보다 커야합니다.');
    }
    setTimeout(callback, seconds * 1000);
}

try {
    runInDelay(() => { console.log('👻') }, 2);
} catch (e) {
    console.log(e);
}
