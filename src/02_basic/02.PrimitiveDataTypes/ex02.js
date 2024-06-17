
console.log("========================================2강========================================")
/**
 * 2강
 * 데이터 타입
 * 프리미티브 타입
 * undefiend와 null
 * - 둘 다 '값이 없음'을 의미한다.
 * 값이 없음이란? = 어떤 연산이나 로직을 수행한 다음에 결과가 없는 것
 * 값이 없음을 표현하는 방법이 다양하다. ex) 배열의 indexOf의 경우 값이 없을 -1로 표현
 */

var a; // a = undefined; = 자스가 자동으로 할당
console.log(a)
console.log({ a }) // 객체 리터럴로 출력 이유 = 변수명이 보이므로 조금더 명확함.
let b;
console.log({ b }) // b = undefined;
const c = 12; // ★ 상수는 선언과 동시에 꼭 값을 초기화 해줘야 한다. = 상수는 한번 undefined로 초기화가 되면 다른 값으로 바꿀 수 없기 때문이다.
console.log({ c })

// null은 개발자가 직접 변수에 할당할 수 있다.
var d = null; // null은 명시적으로 값이 없음을 표현
console.log({ d })

let e = null;
console.log({ e })

const f = null;
console.log({ e }) // 상수라서 null에서 다른 값으로 못바꿈.

var x; // undefined는 자스가 자동으로 묵시적인 값이 없음을 표현
console.log({ x })
var a = null; // null은 명시적으로 값이 없을 때 표현
console.log({ a })
/**
 * 보통 다른 언어들은 값이 없음을 1개의 값만으로 표현한다.
 * 값이 없음을 표현하는게 1개만 있으니 혼동할 필요가 없으나, 자바스크립트는 undefined와 null 두 개가 존재한다.
 * 보통 다른 언어들은 포인터 변수에 null을 설정한다.
 * ★ 자바스크립트는 프리미티브 타입에 값이 없을 때는 = undefined 사용, 참조형 또는 객체형 타입에 값이 없을 때는 = null을 사용한다.
 * = 구분해서 사용하진 않으나 사용 개념은 알고 있어야 한다.
 */
let myAge = undefined; // 기본타입 number형이 예상되므로 undefined 할당.
myAge = 34;
let person = null; // 객체타입이므로 값이 없을 때는 null을 할당.
person = {
    name: "inseong"
}

function div(a, b) {
    if (b === 0) { // 분모가 0이명 나눗셈의 결과가 없다는 것을 표현. 
        return null; 
    }
    return a / b;
}
console.log(div(10, 0));
console.log([1, 2, 3, -1].indexOf(-1));
console.log([1, 2, 3, -1].indexOf(-2)); // ★ indexOf는 값이 없음을 -1로 표현, 이유는? js에서 배열은 0부터 시작하기 때문에 음수가 될 수 없다.
// 핵심은 모든 함수가 값이 없음을 표현할 때 undefined와 null만 사용하는게 아니다.
const result = [1, 2, 3, -1].find((it) => it === 2); // find함수: 값을 찾아서 있으면 값을 반환
// 1, 2, 3, -1이 순서대로 호출되서 it에 할당된다.
console.log({ result })
const result2 = [1, 2, 3, -1].find((it) => it === 10); // ★ find 호출 시 순서대로 it에 배열이 담긴다.
console.log({ result2 }) // find함수는 -1이 실제 값으로 사용될 수 있으므로 undefined로 값이 없음을 반환한다.