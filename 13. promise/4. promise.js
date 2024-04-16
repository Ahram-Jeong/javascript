/**
 * Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냄
 * Promise 는 프로미스가 생성된 시점에는 알려지지 않았을 수도 있는 값을 위한 대리자로,
 * 비동기 연산이 종료된 이후에 결과 값과 실패 사유를 처리하기 위한 처리기를 연결할 수 있음
 * 프로미스를 사용하면 비동기 메서드에서 마치 동기 메서드처럼 값을 반환할 수 있음
 * 다만 최종 결과를 반환하는 것이 아니고, 미래의 어떤 시점에 결과를 제공하겠다는 '프로미스(promise)'를 반환
 *
 * Promise는 다음 중 하나의 상태를 가짐
 *
 * 대기 (pending) : 이행하지도, 거부하지도 않은 초기 상태
 * 이행 (fulfilled) : 연산이 성공적으로 완료됨
 * 거부 (rejected) : 연산이 실패함
 */

/**
 * Q : 주어진 seconds(초)가 지나면 callback 함수를 호출
 * 단, seconds(초)가 0보다 작으면 에러 발생
 */
function runInDelay(seconds) {
    return new Promise((resolve, reject) => {
        if (!seconds || seconds < 0) {
            reject(new Error('seconds는 0보다 커야합니다.'));
        }
        setTimeout(resolve, seconds * 1000);
    });
}

runInDelay(2)
    .then(() => console.log('Print!👻')) // 1. 필요한 일 수행
    // .catch(error => console.error(error))
    .catch(console.error) // 2. 오류 처리, 위의 주석과 동일
    .finally(() => console.log('끝👀')); // 3. 최종적으로 무조건 실행