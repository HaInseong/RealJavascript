/**
 * Section 5 start
 * Lecture 1
 */

/**
 * 데이터 타입에 대하여
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
 * 부동소수점
 * 뜰 부, 움직일 동
 * 소수점이 움직인다는 의미
 * 123.5 => 123.5 컴퓨터가 소수점을 그대로 표현하는게 아니라
 * 123.5 => 1.235 * 10^2으로 소수점을 표현함(컴퓨터는 0과 1의 2진수)
 * 한정된 메모리 공간에서 좀더 넓은 소수를 표현하기 위해 부동소수점을 선택함
 * ex) 12.5
 * 컴퓨터는 우선 정수 12와 소수 0.5로 나눈다
 * 소수를 2진수로 완벽하게 표현할 수 없을 때가 있다.
 * 이럴 때는 정밀도를 설정해서 범위를 설정한다.
 */
console.log(0.1)
console.log(0.2)
console.log(0.1 + 0.2) // 끝에 4가 붙음
console.log(0.1 + 0.2 === 0.3)
// 2진수로 표현할 수 없는 소수들을 위해서 특별한 수인 앱실론을 새로 만든다.
console.log(Number.EPSILON)
console.log(0.1 + 0.2 - 0.3 < Number.EPSILON)
function compareNumbers(a, b) {
    return Math.abs(a-b) < Number.EPSILON;
    // ★ 소수점을 가진 두수의 차가 아주 작은 특별수 앱실론보다 작으면 같다고 보는 것
}
const result3 = compareNumbers(0.1+0.2, 0.3)
console.log(result3)


/**
 * 6강
 * 문자열(String) 타입
 * 여러 문자의 모음
 */
console.log('abcd'.length)
let name = 'CodingMax';
let firstIndex = 0;
let lastIndex = name.length-1;
console.log(name[0])
console.log(name[name.length-1])
for(let i=0; i<name.length; i++) {
    console.log(name[i])
}
Array(name)
    .forEach((char) => console.log(char.toUpperCase()))

let firstName = 'Coding';
let lastName = 'Max';
let age2 = 30;
let fullName = firstName + ' ' + lastName;
let info = fullName + ' ' + '나이는 ' +  age2;
console.log({fullName})
console.log({info})

/**
 * 자바스크립트는 템플릿 리터럴 제공
 * 문자열 보간
 * 문자열 안에(백틱) 어떤 표현식(달러+중괄호)을 넣을 수 있는 것
 */
let sum1 = `1 + 2 = ${1+2}`;
console.log(sum1)
// 표현식(expression), 문(statement)
// 표현식은 값으로 치환 되는 것
// 문은 하나 이상의 명령을 포함하고 있는 코드 블럭
let info2 = `제 이름은 ${fullName}이고, 나이는 ${age2}입니다.`;
console.log(info2)
// 템플릿 리터럴이 깔끔하므로 문자열 연결보다 많이 사용된다.
for (let i=1; i<=9; i++) {
    console.log(`2 * ${i} = ${2 * i}`);
}

console.log(String.raw`Hello\nWorld`);
const msg = `안녕하세요~
오늘은 날씨가 좋네요~
커피 한잔 어때요?`
console.log(msg)


/**
 * 7강
 * boolean 타입
 */
// 자동차 운전시 신호등
let trafficLightColor = 'blue';
let stopDrive = false;

if (trafficLightColor === 'red') {
    stopDrive = true;
} else if (trafficLightColor === 'yellow') {
    stopDrive = true;
} else if (trafficLightColor === 'blue') {
    stopDrive = false;
} else {
    stopDrive = true;
}

if (stopDrive) {
    console.log('차를 멈춥니다.')
} else {
    console.log('운전을 합니다')
}

for(let i=1; i<=100; i++) {
    if(i%2===0) {
        console.log(`짝수입니다. ${i}`);
    } else {
        console.log(`홀수입니다. ${i}`)
    }
}

console.log(Boolean(true))
console.log(Boolean(42))
console.log(Boolean('Hello'))
console.log(Boolean(false))
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(0)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean('')) // false
let aaaa = 42;
if (aaaa) { // Boolean값을 만들지 않고 바로 조건문에 넣어서 Boolean값처럼 사용하려면 어떤값들이 true인지, false인지 외워둬야 함
    console.log('true입니다.')
}
function testParams(a) {
    if(!a) { // ★ a가 null이거나 undefined라면 true가 된다. 특정 값의 유효성 검사할 때 사용 자주 함.
        console.log('값이 존재하지 않습니다.')
        return null;
    }
    console.log(`값이 있습니다. ${a}`)
    return a;
}
testParams(12)
testParams('')
testParams(null)
testParams()
testParams(undefined)
testParams('Hello')