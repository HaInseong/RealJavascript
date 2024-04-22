/**
 * Section 5 start
 * Lecture 1
 */

/**
 * 데이터 타입
 * 프리미티브 타입
 * - undefined
 * - null
 * - number
 * - string
 * - boolean
 * - Symbol
 * - BigInt
 * 
 * 객체 타입(참조 타입)
 * - Object
 * - Array
 * - Function
 * - Date, Math ...
 * - const person = { ... }
 * - class Animal() {}
 */

var age = 9;
// number 8 byte
// boolean 1 byte

const codingMax = {
    age: 30
}
const myDog = {
    age: 2,
    hasBaby: false
}

let n = 10;
n = 'Hello'; // 자바스크립트는 동적 타입의 언어라 문제되지 않는다.
const sum = n + 20;
console.log({sum});


/**
 * 데이터 타입
 * 프리미티브 타입
 * undefiend와 null
 * - 둘 다 '값이 없음'을 의미한다.
 * 값이 없음이란?
 * 어떤 연산이나 로직을 수행한 다음에 결과가 없는 것
 */

var a;
console.log({ a })
let b;
console.log({ b })
const c = 12;
console.log({ c })

// null은 개발자가 직접 변수에 할당할 수 있다.
var d = null; // null은 명시적으로 값이 없음을 표현
console.log({ d })

let e = null;
console.log({ e })

const f = null;
console.log({ e })

// undefined는 자바스크립트 엔진이 자동으로 설정해준다.
var x; // undefined는 묵시적인 값이 없음을 표현
console.log({ x })

// 보통 다른 언어들은 값이 없음을 1개의 값만으로 표현한다.
// 값이 없음을 표현하는게 1개만 있으니 혼동할 필요가 없으나 자바스크립트는 undefined와 null 두 개가 존재한다.
// 보통 다른 언어들은 포인터 변수에 null을 설정한다.
// 자바스크립트는 프리미티브 타입 = undefined, 
// 참조형 또는 객체형 = null
let myAge = undefined; // 자바스크립트는 동적 타입인데 number형이 예상되므로 undefined 할당.
myAge = 34;
let person = null;
person = {
    name: "inseong"
}

function div(a, b) {
    if (b === 0) {
        return null;
    }
    return a / b;
}
console.log(div(10, 0));
console.log([1, 2, 3, -1].indexOf(-1));
console.log([1, 2, 3, -1].indexOf(-2)); // indexOf는 값이 없음을 -1로 표현, 이유는? js에서 배열은 0부터 시작하기 때문에 음수가 될 수 없다.
// 핵심은 모든 함수가 값이 없음을 표현할 때 undefined와 null만 사용하는게 아니다.
const result = [1, 2, 3, -1].find((it) => it === 2); // find함수: 값을 찾아서 있으면 값을 반환
// 1, 2, 3, -1이 순서대로 호출되서 it에 할당된다.
console.log({ result })
const result2 = [1, 2, 3, -1].find((it) => it === 10);
console.log({ result2 })


/**
 * 3강
 * 데이터 타입
 * 프리미티브 타입
 * number
 */
let aa = 10;
let bb = 5;
let cc = 3.141592;
console.log(aa+bb)
console.log(aa-bb)
console.log(aa*bb)
console.log(aa/bb)
console.log(aa**bb)
// % modular 연산자
// 10 % 2 === 몫5, 나머지0
// x % n === 0, x는 n의 배수
// x % n !== 0, x는 n의 배수가 아니다.
// x % n => 0 ~ n-1
console.log(10%2)
for(let i=0; i<10; i++) {
    if(i%3===0) {
        console.log(i, '3의 배수이면 어떤 일을 한다.')
    }
}
let items = ['a', 'b', 'c'];
function getItem(index) {
    if(index < 0 || index > items.length-1) {
        return null;
    }
    return items[index % items.length]; // 어떤 수가 들어와도 배열의 요소를 반환해야하면 모듈러 연산자 사용
}
console.log(getItem(0))
console.log(getItem(100))
console.log(100%3)

console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)
console.log(Number.NaN) // Not a Number
console.log(10 / 'a')
console.log(parseInt('1'))
console.log(parseInt('a'))
console.log(Infinity) // 양의 무한대 표현 = 다른 언어에서는 무한대를 값으로 제공해주는 경우가 별로 없다. 특별한 경우가 아닌 이상 사용하길 권장하지 않는다.
console.log(-Infinity) // 음의 무한대 표현
console.log(1/0)
console.log(-1/0)

/**
 * 4강
 * 데이터 타입
 * 프리미티브 타입
 * number
 */