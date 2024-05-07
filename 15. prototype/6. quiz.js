// 클래스 기반의 객체지향 프로그래밍
class Animal {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    
    printName() {
        console.log(`${this.name} ${this.emoji}`);
    }
}

class Dog extends Animal {
    play() {
        console.log('놀자:-)');
    }
}

class Tiger extends Animal {
    hunt() {
        console.log('Gotcha! ..🐇..');
    }
}

const dog1 = new Dog('금동', '🐶');
const tiger1 = new Tiger('호랑이', '🐯');

dog1.play();
dog1.printName();
tiger1.hunt();
tiger1.printName();


console.log(dog1 instanceof Dog); // true
console.log(dog1 instanceof Animal); // true
console.log(dog1 instanceof Tiger); // false
console.log(tiger1 instanceof Dog); // false
console.log(tiger1 instanceof Animal); // true
console.log(tiger1 instanceof Tiger); // true