/**
 * class Tiger {
 *     constructor(color) {
 *         this.color = color;
 *     }
 *
 *     eat() {
 *         console.log('먹는다🍕');
 *     }
 *     sleep() {
 *         console.log('잔다😪');
 *     }
 * }
 *
 * class Dog {
 *     constructor(color) {
 *         this.color = color;
 *     }
 *
 *     eat() {
 *         console.log('먹는다🍕');
 *     }
 *     sleep() {
 *         console.log('잔다😪');
 *     }
 *     play() {
 *         console.log('놀자😙');
 *     }
 * }
 */

class Animal {
    constructor(color) {
        this.color = color;
    }

    eat() {
        console.log('먹는다🍕');
    }
    sleep() {
        console.log('잔다😪');
    }
}

// 상속
class Tiger extends Animal {}

const tiger = new Tiger('레드');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
    constructor(color, ownerName) {
        super(color);
        this.ownerName = ownerName;
    }

    play() {
        console.log('놀자😙');
    }

    // 오버라이딩 (overriding) : 자식 클래스에서 메소드를 재정의
    eat() {
        super.eat(); // 부모 클래스 메소드 호출
        console.log('강아지가 먹는다🐶');
    }
}

const dog = new Dog('블루', 'WOODZ');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();