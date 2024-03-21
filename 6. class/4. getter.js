// 접근자 프로퍼티 (Accessor Property)
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() { // 접근
        return `${this.lastName} ${this.firstName}`;
    }
    
    set fullName(value) { // 할당
        console.log('set', value);
    }
}

const student = new Student('승연', '조');
console.log(student.firstName);
console.log(student.fullName); // get
student.fullName = '황민현'; // set