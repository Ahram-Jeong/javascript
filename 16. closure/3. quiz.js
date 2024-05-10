function loop() {
    const array = [];
    /**
     * let과 var의 차이점
     * let -> 0, 1, 2, 3, 4
     * var -> 5, 5, 5, 5, 5
     * var는 block 스코프가 없고 function 스코프이기 때문에
     * 계속 동일하게 하나의 변수로만 남아 있음
     */
    for (let i = 0; i < 5; i++) {
        array.push(function () {
            console.log(i);
        });
    }
    return array;
}

const array = loop();
array.forEach((func) => func());