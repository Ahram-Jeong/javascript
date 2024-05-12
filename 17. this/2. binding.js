/**
 * this 바인딩
 * 자바, C#, C++ 등 대부분의 객체지향 언어에서 this는 항상 자신의 인스턴스를 가리킴
 * 정적으로 인스턴스가 만들어지는 시점에서 this가 결정되며, 변경 불가
 * But, 자바스크립트에서 this는 호출하는 사람(caller)에 의해 this가 동적으로 결정 됨
 */
function Cat(name) {
    this.name = name;
    this.printName = function () {
        console.log(`고양이의 이름을 출력한다옹 : ${this.name}`);
    };
}

function Dog(name) {
    this.name = name;
    this.printName = function () {
        console.log(`강아지의 이름을 출력한다개 : ${this.name}`);
    };
}

const cat = new Cat('우즈');
const dog = new Dog('금동');
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName(); // 고양이의 이름을 출력한다옹 : 금동
cat.printName(); // 고양이의 이름을 출력한다옹 : 우즈

function printOnMonitor(printName) {
    console.log('모니터를 준비하고, 전달된 콜백을 실행!');
    printName();
}

printOnMonitor(cat.printName); // 고양이의 이름을 출력한다옹 : undefined -> caller가 없기 때문에 undefined