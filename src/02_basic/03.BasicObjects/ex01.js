/**
 * 1강
 * 객체 Object
 * js에서 객체는 여러 속성을 가지고 있다.
 * - 속성 = 'key': value
 * key는 문자열과 Symbol만 될 수 있고, value는 함수, 객체, primitive타입도 될 수 있다.
 * key는 자스에서 자동으로 ''를 붙여준다.
 */
const jerry = {
    name: 'Jerry',
    age: 10,
    job: 'Student'
};
// # 객체 생성 방법
// 1. {} = 오브젝트 리터럴, 객체 리터럴이라 한다.
const emptyObject = {};
// 2. Object()
const emptyObject2 = new Object();

const person = {}; // 빈 객체 생성
// 객체를 만들면 속성을 자유롭게 추가 가능
console.log(person.name);
person.name = 'CodingMax'; // name 속성 동적으로 정의
console.log(person.name)
person['age'] = 20; // age 속성 동적으로 정의
console.log(person.age, person['age'])
console.log(person.address)

if (person.name) {
    console.log(person.name)
    console.log(person['name']);
}

delete person.name // ★ person은 const인데 어떻게 변경이 가능한지? 
// person의 주소값을 변경하는게 아니라 person이 가지고 있는 주소값에 해당하는 객체를 변경하는 것이므로 가능하다.

if ('name' in person) {
    console.log(person.name);
    console.log(person['name']);
}

if ('address' in person) {
    console.log(person.address);
    console.log(person['address']);
}

const inseong = {
    name: 'Levi',
    age: 34,
    address: { // value에 객체
        city: 'Seoul'
    }
};
const dog = {
    name: 'Coco',
    age: 2
}
// 객체 분해 또는 객체 구조 분해 = 객체에 매번 .(점) 연산자로 접근하기 번거롭기 때문에 사용
// Object destructuring
const { name, age } = inseong; // inseong 객체의 속성값이 자동으로 변수에 저장된다.
console.log({ name, age });
const { name: myDogName, age: myDogAge} = dog;
console.log({ myDogName, myDogAge })
const { address: { city }} = inseong; // 객체 안에 객체의 속성 구조분해 방법

console.log({ city })

// 객체 메서드 = 객체의 속성의 값으로 함수도 가질 수 있다.
const calculator = {
    add: function (a, b) { // value에 함수
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    }
};
console.log(calculator.add(20, 10)) // ★ 객체메서드는 속성키에 접근하여 함수처럼 호출함.
console.log(calculator.sub(20, 10))

console.log(calculator['add'](20, 10))
function operator(op, a, b) {
    return calculator[op](a, b); // ★ [] 표기법 사용시 op값에 따라 동적으로 메서드 사용 가능
}
console.log('add test1: ' + operator('add', 10, 20))
console.log('sub test2:' + operator('sub', 20, 10))

let op = 'add';
let code = '-';
if (code === '-') {
    op = 'sub';
}
console.log(operator(op, 10, 20))

// this 키워드: 현재 객체를 가르키는 pointer 변수
const profile = {
    name: 'CodingMax',
    age: 10,
    job: 'programmer',
    greeting: function (friend) {
        console.log(`
        Hello! ${friend},
        I'm ${this.name}.
        ${this.age} years old.
        `);
    }
};
profile.greeting('Inseong');

// Object
// Obejct.keys(), Object.values()
console.log(Object.keys(profile)) // profile객체가 가지고 있는 모든 속성의 키값이 출력된다.
console.log(Object.values(profile)) // profile객체가 가지고 있는 모든 속성의 값이 출력된다.
for(const key of Object.keys(profile)) { // Object.keys(), Object.key() 함수들은 for문에서 많이 사용됩니다.
    console.log(profile[key]);
}
for(const key in profile) { // profile이 가지고 있는 속성의 모든 키값들을 루프를 돌면서 key에 담아준다. = for of문 쓰지마라.
    console.log(`${key} = ${profile[key]}`);
}
// 객체 = 속성(값, 데이터) + 메서드(알고리즘)
// 프로그램 = 데이터 + 알고리즘
// 그렇기 때문에 객체를 매우 작은 프로그램으로 이해할 수 있다.
// {} 오브젝트 리터럴로 만든 객체들은 어떤 타입이 아니라 객체의 값이다. 실제 메모리에 할당되고 있는 인스턴스이다.
// 객체 타입은 ES6 전과 후로 나뉜다.