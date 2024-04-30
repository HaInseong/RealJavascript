/**
 * 1강
 * 객체 Object
 * js에서 객체는 여러 속성을 가지고 있다.
 * - 속성 = key: value
 * key는 문자열과 Symbol만 될 수 있고, value는 함수, 객체, primitive타입도 될 수 있다.
 */
const jerry = {
    name: 'Jerry',
    age: 10,
    job: 'Student'
};
// # 객체 생성 방법
// 1. {}
const emptyObject = {};
// 2. Object()
const emptyObject2 = new Object();

const person = {};
console.log(person.name);
person.name = 'CodingMax';
console.log(person.name)
person['age'] = 20;
console.log(person.age, person['age'])

if (person.name) {
    console.log(person.name)
    console.log(person['name']);
}

delete person.name // ★ person은 const인데 어떻게 변경이 가능한지? person의 주소값을 변경하는게 아니라 person이 가지고 있는 주소값에 해당하는 객체를 변경하는 것이므로 가능하다.

if ('name' in person) {
    console.log(person.name);
    console.log(person['name']);
}

if ('address' in person) {
    console.log(person.address);
    console.log(person['address']);
}

// 객체 분해 또는 객체 구조 분해
// Object destructuring
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
const { name, age } = inseong;
const { name: myDogName, age: myDogAge} = dog;
console.log({ name, age });
console.log({ myDogName, myDogAge })

const { address: { city }} = inseong;
console.log({ city })
// 객체 메서드
const calculator = {
    add: function (a, b) { // value에 함수
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    }
};
console.log(calculator.add(20, 10))
console.log(calculator.sub(20, 10))
console.log(calculator['add'](20, 10))

function operator(op, a, b) {
    return calculator[op](a, b); // ★ [] 표기법 사용시 op값에 따라 동적으로 메서드 사용 가능
}

let op = 'add';
let code = '-';
if (code === '-') {
    op = 'sub';
}
console.log(operator('add', 10, 20))
console.log(operator('sub', 20, 10))
console.log(operator(op, 10, 20))

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
profile.greeting('Jim');
// Object
// Obejct.keys(), Object.values()
console.log(Object.keys(profile))
console.log(Object.values(profile))
for(const key of Object.keys(profile)) {
    console.log(profile[key]);
}
for(const key in profile) { // profile이 가지고 있는 모든 속성의 모든 키값들 마다 루프를 돌면서 key에 담아준다.
    console.log(`${key} = ${profile[key]}`);
}
// 객체 = 속성(값, 데이터) + 메서드(알고리즘)
// 프로그램 = 데이터 + 알고리즘
// 그렇기 때문에 객체를 매우 작은 프로그램으로 이해할 수 있다.
// {} 오브젝트 리터럴로 만든 객체들은 어떤 타입이 아니라 객체의 값이다. 실제 메모리에 할당되고 있는 인스턴스이다.
// 객체 타입은 ES6 전과 후로 나뉜다.