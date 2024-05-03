// const dog1 = { name : '금동', emoji : '🐶' };
// const dog2 = { name : '샤갈', emoji : '🐩' };

function Dog(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    // 인스턴스 레벨의 함수
/*    this.printName = () => {
        console.log(`${this.name} ${this.emoji}`);
    }*/
}

// 프로토타입 레벨의 함수
Dog.prototype.printName = function () {
    console.log(`${this.name} ${this.emoji}`);
};

const dog1 = new Dog('금동', '🐶');
const dog2 = new Dog('샤갈', '🐩');

console.log(dog1, dog2); // Dog { name: '금동', emoji: '🐶' } Dog { name: '샤갈', emoji: '🐩' }
dog1.printName(); // 금동 🐶
dog2.printName(); // 샤갈 🐩

/**
 * 오버라이딩
 * 인스턴스 레벨에서 (자식) 동일한 이름으로 함수를 재정의 하면 (오버라이드)
 * 프로토타입 레벨 (부모) 함수의 프로퍼티는 가려진다. (쉐도잉)
 */
dog1.printName = function () {
    console.log('Hi');
}
dog1.printName(); // Hi

// 정적 레벨
Dog.hello = () => {
    console.log('Hello:-)');
};
Dog.hello(); // Hello:-)
Dog.MAX_AGE = 20;