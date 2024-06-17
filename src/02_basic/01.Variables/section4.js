console.log("========================================1강========================================")
/**
 * 1강
 * 프로그램 = 데이터(변수) + 알고리즘(if, for, function)
 * 요리 = 재료 + 레시피
 */

/**
 * 변수: 변할 수 있는 수
 * - 변할 변, 셈 수
 * 상수: 항상 동일한 수
 * - 항상 상, 셈 수
 */

// 변수
// mutable, mutation = 변경될 수 있는
var a = 10;
let b = 20;
a = 40;
b = 50;
console.log({a, b})

// 상수
// immutable = 변경되지 않는
const c = 30;
// c = 50; // 변경 불가




console.log("========================================2강========================================")
/**
 * 2강
 * 변수 선언과 할당
 */
var a = 10;
var a;
a = 10;
a = 20;

let x = 10, // ★ 자바스크립트에서 모든 변수는 포인터 변수라는 것을 항상 기억해야한다.
// 1. 10을 담고 있는 메모리 셀은 999라는 주소를 가지고 있다.
// 2. x을 담고 있는 메모리 셀은 AAA라는 주소를 가지고 있고, 999라는 10의 주소값을 저장하여 가지고 있다.
y = 20,
z = 30;
console.log({x, y, z})
x = 100; 
console.log({x})

// let age = 9;
let age;
age = 9;

// const
const name = 'LeviMax';
// const name;
// name = 'LeviMax';
// ★ 선언과 할당을 두 부분으로 나누면 상수의 의미가 깨진다. 
// 왜냐하면, 상수는 한번 값이 정해지면 프로그램이 끝날 때 까지 값이 변하지 않는 것 이므로 선언과 할당을 동시에 해줘야한다.



console.log("========================================3강========================================")
/**
 * 3강
 * 변수의 이름 그리고 그 이름의 중요성
 */
var a = 10;
// var, let, const
// var identifier = value;
// 추상화에서 공부했듯이 identifier가 value의 의미를 담는다.
// 예를 들어, 제가 지금은 강좌를 찍기 때문에 a는 10, b는 20 이렇게 막 변수 이름을 마음대로 찍고 있지만, 
// 실제로는 그렇게 하면 안됩니다.
// let a = 9로 이렇게 무의미한 이름을 지으면 나중에 이 코드를 봤을 때 이 a가 어떤 용도인지 잘 몰라요.
// 그래서 숫자 9를 어떤 의미로 담을건지 반드시 변수 이름에 표시해줘야 합니다. ex) let age = 9;

let adultAge = 20; // Camel Case
let my_name = 'Levi'; // Snkae Case = 전부 소문자

// Pascal Case = 시작을 대문자로, 이어지는 단어도 대문자로 = 클래스, enum, type의 이름을 지어줄 때 많이 사용.
class Person {};
class AnimalType {};

// 상수 = Upper Snake Case
const PI = 3.141592;
const SERVER_ADDRESS = 'http://localhost' // 상수 이름이 길어질 땐 스네이크 케이스도 섞어씀.




console.log("========================================4강========================================")
/**
 * 4강  = ★ 참조형에 대한 메모리 설명이 많은 강의라 다시 들어보기.
 * 변수 복사
 */
let aa = 10;
let bb = aa; // ★ 새로운 10이 메모리에 올라가고, bb는 그 새로운 메모리의 주소값을 담는다.
aa = 100;
console.log({aa, bb})

// 변수는 그 자리에만 있는 것이 아니라 다양한 곳에서 사용된다. = 변수가 다른 곳으로 갈 때 복사가 된다.
// function f(aa) {...}
// class Person(aa);
// item[aa]

/**
 * 자바스크립트에서 프리미티브 타입은 number, boolean, string, null, undefined, Symbol, bigint가 있다.
 * 프리미티브 타입은 항상 값복사 = 크기가 고정되어 있다.

 * 객체인 참조형 타입은 class, Array, function가 있다.
 * 참조형 타입은 크기가 고정될 수 없다. ex) 클래스만 보더라도 어떻게 정의하냐에 따라서 속성과 메소드가 항상 바뀐다.
 * 프리미티브 타입처럼 값복사가 되는게 같은 주소의 객체를 가르키게 된다.
 */

let person1 = { // primitive 타입인 aa나 객체인 person1 모두 메모리에 올라가는 것은 똑같다. 
    name: 'CodingMax'
};
console.log(person1)
let jsonString = JSON.stringify(person1); // 참조형의 값복사
// 두 객체가 서로 참조하는 것을 순환참조라 하는데, 이런 경우 deep copy는 에러난다.
let person2 = JSON.parse(jsonString);
console.log(person2)
let person3 = person1;
person3.name = '코딩맥스';
console.log(person1)
console.log(person3)


// String은 primitive타입인데, 무한정 길어지면 값복사에 성능상 문제가 생길 수 있음.
// String은 선언되면 내부적으로는 객체가 된다.
// ★ 성능상 문제를 해결하기 위해 최적화 방식을 사용함. = 정말 필요할 때만 값복사 하는 방식
let greeting = 'Hello';
console.log(greeting[0])
// greeting[0] = 'h'; // Error 발생, 수정 불가
let sb = greeting; // ★ 값복사가 아니라 참조형처럼 sb도 'Hello'를 가르키는 주소값을 저장한다.
console.log({sb})
b = sb.replace('H', 'h'); // 이때서야 값복사를 위한 새로운 'Hello'를 메모리 셀에 올린다.
console.log({greeting})
console.log({b})




console.log("========================================5강========================================")
/**
 * 5강 = ★ setTimeout 함수안에서 var타입 호이스팅으로 발생하는 문제 때문에 다시 들어야함.
 * 변수 스코프
 */
function testVarScope() {
    if(true) {
        var x = 5;
    }
    console.log(x);
}
testVarScope();
// var는 함수스코프(함수 블록 안)를 가진다.
function testVarScope2() {
    if(true) {
        let yy = 5;
    }
    // console.log(yy); // 스코프 때문에 참조 Error 발생
}
testVarScope2();
// ES6 이후 let, const 블록 스코프를 가진다.

function testTimer() {
    // var i; for문에서 이부분을 캡쳐해서 반복 돌림
    // i = undefined;
    console.log(i) // var타입은 호이스팅으로 undefined가 출력되는 것을 확인할 수 있다.
    for(var i=0; i<3; i++) {
        setTimeout(function () { // setTimeout 함수 안에서 함수를 추가로(콜백함수) 실행하는 구문
            console.log(i)
        }, 1000) // for문이 끝나는 시간이 1초보다 더 짧다.
    }
    console.log('for문 종료, 현재 i의 값:', i) // ★ for loop가 종료된 후 실행되므로 i++가 적용되어 3이 출력된다.
}
testTimer();

// let은 블록 스코프가 적용되어 출력되는 것을 확인할 수 있음.
function testTimer2() {
    for(let i=0; i<3; i++) {
        setTimeout(function () {
            console.log(i)
        }, 2000)
    }
}
testTimer2()




console.log("========================================6강========================================")
/**
 * 6강
 * var변수의 문제점2
 */

// 문제점: 변수 쉐도잉
function testShadowing() {
    // var x;
    // x = undefined;
    // 이렇기 때문에 동일한 x를 참조한다.
    var x = 5;
    if (true) {
        var x = 10;
        console.log(x)
    }
    console.log(x) 
}
testShadowing(); // 10이 2번 찍힘

// var는 변수 쉐도잉과 의도치 않은 글로벌 변수 생성으로 중대한 실수를 하게 만든다.
function test2() {
    blablah = 'Hello';
    console.log(blablah)
}
test2()
console.log(blablah)
// console.log(window.blablah)
// 결론: var 지양, let과 const만 사용