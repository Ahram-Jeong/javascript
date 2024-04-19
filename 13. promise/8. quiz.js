function getChicken() {
    return Promise.reject(new Error('닭이 없습니다.'));
    // return Promise.resolve(`🐣 => 🐓`);
}

function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
}

/**
 * async-await
 */
async function makeFriedEgg() {
    let chicken;
    try {
        chicken = await getChicken();
    } catch {
        chicken = '🐔';
    }
    const egg = await fetchEgg(chicken);
    return fryEgg(egg);

/*    return getChicken()
        .catch((e) => [e.name, '🐔'])
        .then(fetchEgg)
        .then(fryEgg)
        .then((result) => {
            console.log(result); // Error,🐔 => 🥚 => 🍳
            return result; // 값을 꼭 리턴해야 메소드 호출 시 undefined을 반환하지 않음
        });*/
}

makeFriedEgg().then(console.log); // 🐔 => 🥚 => 🍳