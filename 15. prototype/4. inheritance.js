// 프로토타입 기반의 객체지향 프로그래밍
function Animal(name, emoji) {
    this.name = name;
    this.emoji = emoji;
}

Animal.prototype.printName = function () {
    console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
    // super(name, emoji);
    Animal.call(this, name, emoji); // 상속
    this.owner = owner;
}

// Dog.prototype = Object.create(Object.prototype); 기본은 Object의 prototype을 반환
Dog.prototype = Object.create(Animal.prototype); // Dog의 prototype을 Animal의 prototype과 연결 후, 새 obj 반환

Dog.prototype.play = () => {
    console.log('Meow:-)');
};

const dog1 = new Dog('금동', '🐶', '우즈');
dog1.play();
dog1.printName();

function Tiger(name, emoji) {
    Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
    console.log('Gotcha! ..🐇..');
}

const tiger1 = new Tiger('호랑이', '🐯');
tiger1.printName();
tiger1.hunt();