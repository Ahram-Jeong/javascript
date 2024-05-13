function Cat(name) {
    this.name = name;
    /**
     * 2. arrow 함수 사용 : arrow 함수는 렉시컬 환경에서의 this를 기억
     * arrow 함수 밖에서 제일 근접한 스코프의 this를 가리킴
     */
    this.printName = () => {
        console.log(`고양이의 이름을 출력한다옹 : ${this.name}`);
    };
    // 1. bind 함수를 이용하여 수동적으로 바인딩
    // this.printName = this.printName.bind(this);
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
// binding 후 결과 : 고양이의 이름을 출력한다옹 : 우즈