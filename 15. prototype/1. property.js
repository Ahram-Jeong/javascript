const woodz = { name : '조승연', emoji : '🦊' };

console.log(Object.keys(woodz)); // [ 'name', 'emoji' ]
console.log(Object.values(woodz)); // [ '조승연', '🦊' ]
console.log(Object.entries(woodz)); // [ [ 'name', '조승연' ], [ 'emoji', '🦊' ] ]

console.log('name' in woodz); // true
console.log(woodz.hasOwnProperty('name')); // true

// Object의 각각의 프로퍼티는 PropertyDescriptors라는 객체로 저장 됨
const descriptors = Object.getOwnPropertyDescriptors(woodz);
console.log(descriptors);
/**
 * 결과
 * {
 *   name: {
 *     value: '조승연',
 *     writable: true,
 *     enumerable: true,
 *     configurable: true
 *   },
 *   emoji: { value: '🦊', writable: true, enumerable: true, configurable: true }
 * }
 */

const desc = Object.getOwnPropertyDescriptor(woodz, 'name');
console.log(desc); // { value: '조승연', writable: true, enumerable: true, configurable: true }

Object.defineProperty(woodz, 'name', {
    value : '우즈',
    writable : false,
    enumerable : false,
    configurable : false
});
console.log(woodz.name); // 우즈
console.log(Object.keys(woodz)); // [ 'emoji' ]
delete woodz.name; // configurable : false 때문에 삭제 불가
console.log(woodz.name); // 우즈

const student = {};
Object.defineProperties(student, {
    firstName: {
        value: '승연',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    lastName: {
        value: '조',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    fullName: {
        get() {
            return `${this.lastName} ${this.firstName}`;
        },
        set(name) {
            [this.lastName, this.firstName] = name.split(' ');
        },
        configurable: true,
    }
});
console.log(student); // { firstName: '승연', lastName: '조' }
console.log(student.fullName); // 조 승연
