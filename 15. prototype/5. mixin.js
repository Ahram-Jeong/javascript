/**
 * Mixin : 다른 클래스를 상속받을 필요 없이 이들 클래스에 구현되어있는 메소드를 담고 있는 클래스
 * Object.assign : 얕은 복사 수행
 * JS도 자바처럼 단일 상속만 허용,  오브젝트는 단 하나의 prototype을 가리킴
 * BUT, 여러 개의 함수들을 상속하고 싶을 때 Mixin 사용
 */

const play = {
    play : function () {
        console.log(`${this.name} 놀자!`);
    }
};

const sleep = {
    sleep : function () {
        console.log(`${this.name} 졸려!`);
    }
};

function Dog(name) {
    this.name = name;
}

// Dog.prototype에 메소드 복사
Object.assign(Dog.prototype, play, sleep);

const dog = new Dog('금동');
console.log(dog);
dog.play();
dog.sleep();

class Animal {}
class Tiger extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
}

Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('샤갈');
tiger.play();
tiger.sleep();