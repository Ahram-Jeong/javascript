// 접근 제어자 - 캡슐화
// private(-> #), public(-> 기본), protected
class Fruit {
    // 필드
    // name, emonji 생략 가능
    #name;
    #emoji;
    #type = '과일';
    
    constructor(name, emoji) {
        this.#name = name;
        this.#emoji = emoji;
    }

    #display = () => {
        console.log(`${this.#name} : ${this.#emoji}`);
    };
}

const orange = new Fruit('orange', '🍊');
// apple.#name = '오렌지'; // #field는 외부에서 접근 불가능
console.log(orange);