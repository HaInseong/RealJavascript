/** 섹션4
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
// mutable, mutation 변경될 수 있는
var a = 10;
let b = 20;
a = 40;
b = 50;
console.log({a, b})

// 상수
// immutable 변경되지 않는
const c = 30;
// c = 50;


/**
 * 2강
 * 변수 선언과 할당
 */
var a = 10;
var a;
a = 10;
a = 20;

let x = 10,
y = 20,
z = 30;
console.log({x, y, z})


x = 100;
// 자바스크립트에서 변수는 포인터 변수라는 것을 항상 기억해야한다.
console.log({x})

// let age = 9;
let age;
age = 9;

// const
const name = 'LeviMax';
// const name;
// name = 'LeviMax';
// 선언과 할당을 두 부분으로 나누면 상수의 의미가 깨진다. 
// 왜냐하면, 상수는 한번 값이 정해지면 프로그램이 끝날 때 까지 값이 변하지 않는 것 이므로 선언과 할당을 동시에 해줘야한다.


/**
 * 3강
 * 변수의 이름 그리고 그 이름의 중요성
 */
var a = 10;
// var, let, const
// var identifier = value;
// 추상화에서 공부했듯이 identifier가 value의 의미를 담는다.
// 예를 들어서 제가 지금은 강자를 찍기 때문에 a는 10, b는 20 이렇게 막 변수 이름을 마음대로 찍고 있지만 실제로는 그렇게 하면 안 됩니다.
// let x는 9로 이렇게 무의미한 이름을 지으면 나중에 이 코드를 봤을 때 이 x가 어떤 용도인지 잘 몰라요.
let adultAge = 20; // Camel Case
let my_name = 'Levi'; // Snkae Case

// Pascal Case
class Person {};
class AnimalType {};
// enum, type의 이름을 지어줄 때 많이 사용.

// 상수 = Upper Snake Case
const PI = 3.141592;
const SERVER_ADDRESS = 'http://localhost'


/**
 * 4강
 * 변수 복사
 */
let aa = 10;
let bb = aa; // 값복사
aa = 100;
console.log({aa, bb})

// function f(aa) {...}
// class Person(aa);
// item[aa]

/**
 * 자바스크립트에는
 * 프리미티브 타입
 * => 값복사 = 크기가 고정되어 있다.
 * number, boolean, string, null, undefined, Symbol, bigint
 * 
 * 참조형 타입
 * 얕은 복사
 * 깊은 복사 = 값복사
 * class, Array, function
 * 크기가 고정되지 않는다. = 클래스만 보더라도 속성과 메소드가 항상 바뀐다.
 * 값복사가 되는게 아니라 주소가 복사된다.
 */

let person1 = {
    name: 'Coding'
};
console.log(person1)
let jsonString = JSON.stringify(person1); // 새로운 객체 할당 = 값복사와 동일 = 깊은 복사

let person2 = person1; // 주소 복사 = 얕은 복사
person2.name = 'Levi';
console.log(person1)
console.log(person2)

let person3 = JSON.parse(jsonString);
console.log(person3)

// String
// 개발자는 프리미티브 타입인 문자열이 내부동작(참조형)은 다르지만, 값복사가 되었다는 것을 알고 있어야한다.
let greeting = 'Hello';
console.log(greeting[0])
// greeting[0] = 'h';
let sb = greeting;
console.log({b})
b = sb.replace('H', 'h');

console.log({greeting})
console.log({b})


/**
 * 5강
 * 변수 스코프
 */
// var는 함수 스코프를 가진다.
// ES6 let, const 블록 스코프
function testTimer() {
    // var i;
    // i = undefined;
    // 1초 전에 3번의 for문이 먼저 끝난다.
    // var 타입은 함수 스코프라 호이스팅이 발생하여 아래의 경우처럼 문제가 될 수 있다.
    console.log(i)
    for(var i=0; i<3; i++) {
        setTimeout(function () {
            console.log(i)
        }, 1000)
    }
    console.log('for문 종료, 현재 i의 값:', i)
}
testTimer();

// let은 블록 스코프로 그동안 배웠던 대로 출력되는 것을 확인할 수 있음.
function testTimer2() {
    for(let i=0; i<3; i++) {
        setTimeout(function () {
            console.log(i)
        }, 2000)
    }
}
testTimer2()


/**
 * 6강
 * var변수의 문제점
 */

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
testShadowing();

// var는 변수 쉐도잉과 의도치 않은 글로벌 변수 생성으로 중대한 실수를 하게 만든다.
function test2() {
    blablah = 'Hello';
    console.log(blablah)
}
test2()
console.log(blablah)
console.log(window.blablah)
// 결론: var 지양, let과 const만 사용