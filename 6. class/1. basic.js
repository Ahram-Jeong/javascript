// 객체를 손쉽게 만들 수 있는 템플릿 👇
// 1. 생성자 함수 (old & 고전적인 방법)
// 2. 클래스 (new!)

// 클래스 class
class Fruit {
    // 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji) { // 객체로 만드는 데 필요한 데이터를 인자로 받는 생성자
        this.name = name;
        this.emoji = emoji;
    }

    // 함수 (메소드)
    display = () => {
        console.log(`${this.name} : ${this.emoji}`);
    };
}

// apple은 Fruit의 인스턴스 (* 인스턴스 = 클래스를 통해 만들어진 객체)
const apple = new Fruit('apple', '🍎');
// orange는 Fruit의 인스턴스
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(orange.name);
console.log(orange.emoji);
orange.display();