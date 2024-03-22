// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보 : 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원 시급 : 10,000원
// 파트타임 직원 시급 : 8,000원

class Employee {
    constructor(name, dept, hoursPerMonth, payRate) {
        this.name = name;
        this.dept = dept;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }

    calculatePay() {
        return this.hoursPerMonth * this.payRate;
    }
}

class  FullTimeEmployee extends Employee {
    static PAY_RATE = 10000;
    constructor(name, dept, hoursPerMonth) {
        super(name, dept, hoursPerMonth, FullTimeEmployee.PAY_RATE);
    }
}

class  PartTimeEmployee extends Employee {
    static PAY_RATE = 8000;
    constructor(name, dept, hoursPerMonth) {
        super(name, dept, hoursPerMonth, PartTimeEmployee.PAY_RATE);
    }
}

const ashley = new FullTimeEmployee('애슐리', 'web', 30);
const woodz = new PartTimeEmployee('조승연', 'web', 15);
console.log(ashley.calculatePay());
console.log(woodz.calculatePay());