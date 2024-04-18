function getBanana() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('🍌');
        }, 1000);
    });
}

function getApple() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('🍎');
        }, 3000);
    });
}

/**
 * async
 * async 선언은 AsyncFunction 객체를 반환하는 하나의 비동기 함수를 정의
 * 비동기 함수는 이벤트 루프를 통해 비동기적으로 작동하는 함수로, 암시적으로 Promise를 사용하여 결과를 반환
 * 그러나 비동기 함수를 사용하는 코드의 구문과 구조는 표준 동기 함수를 사용하는것과 많이 비슷
 * async 함수는 항상 promise를 반환
 * 만약 async 함수의 반환값이 명시적으로 promise가 아니라면 암묵적으로 promise로 감싸짐
 *
 * await
 * async 함수에는 await 식이 포함될 수 있음, await 키워드는 async 함수에서만 유효!
 * 이 식은 async 함수의 실행을 일시 중지하고 전달 된 Promise의 해결을 기다린 다음 async 함수의 실행을 다시 시작하고 완료 후 값을 반환
 *
 * async-await 함수의 목적은 사용하는 여러 promise의 동작을 동기스럽게 사용할 수 있게 하고,
 * 어떠한 동작을 여러 promise의 그룹에서 간단하게 동작하게 하는 것
 */

// async-await : 바나나 + 사과 가져오기
async function fetchFruits() {
    const banana = await getBanana();
    const apple = await getApple();
    return [banana, apple];
}

fetchFruits().then((result) => console.log(result)); // [ '🍌', '🍎' ] : 4초 소요
