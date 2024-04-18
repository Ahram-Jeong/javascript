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

function getOrange() {
    return Promise.reject(new Error('NO ORANGE!'));
}

// Promise Chaining : 바나나 + 사과 가져오기
getBanana()
    .then((banana) => getApple()
        .then((apple) => [banana, apple]))
    .then(console.log); // [ '🍌', '🍎' ] : 4초 소요

// Promise.all() : 한 번에 모든 Promise들을 병렬적으로 실행
Promise.all([getBanana(), getApple()])
    .then((fruits) => console.log('Promise.all()', fruits)); // Promise.all [ '🍌', '🍎' ] : 3초 소요

// Promise.race() : iterable 안에 있는 프로미스 중에 가장 먼저 완료된 것의 결과값으로 그대로 이행하거나 거부
Promise.race([getBanana(), getApple()])
    .then(fruit => console.log('Promise.race()', fruit)); // 🍌 : 1초 소요

// Promise.all() 에러 포함
Promise.all([getBanana(), getApple(), getOrange()])
    .then((fruits) => console.log('Promise.all()-error', fruits))
    .catch(console.log);

// Promise.allSettled() : 실패하든 성공하든 그 결과를 { key : value }의 형태의 배열로 묶어 출력
Promise.allSettled([getBanana(), getApple(), getOrange()])
    .then((fruits) => console.log('Promise.allSettled', fruits))
    .catch(console.log);