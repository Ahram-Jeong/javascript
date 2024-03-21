// static 정적 프로퍼티와 메소드
class Fruit {
    static MAX_FRUITS = 12;
    // 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji) { // 객체로 만드는 데 필요한 데이터를 인자로 받는 생성자
        this.name = name;
        this.emoji = emoji;
    }

    // 클래스 레벨의 메소드
    static makeFavoriteFruit() {
        // 클래스 레벨의 메소드에서는 this를 참조할 수 없음
        return new Fruit('cherry', '🍒');
    }

    // 인스턴스 레벨의 메소드
    display = () => {
        console.log(`${this.name} : ${this.emoji}`);
    };
}

console.log(Fruit.makeFavoriteFruit());
console.log(Fruit.MAX_FRUITS);
// apple은 Fruit의 인스턴스 (* 인스턴스 = 클래스를 통해 만들어진 객체)
const apple = new Fruit('apple', '🍎');
// orange는 Fruit의 인스턴스
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(orange.name);
console.log(orange.emoji);
orange.display();
