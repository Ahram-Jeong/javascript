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

// fetchEgg('🐔').then((egg) => console.log(egg));

/**
 * Promise Chaining
 * 정상 : 🐣 => 🐓 => 🥚 => 🍳
 * 오류 시 : 🐔 => 🥚 => 🍳
 */
getChicken()
    .catch((e) => [e.name, '🐔'])
    .then(fetchEgg)
    .then(fryEgg)
    .then(console.log);
