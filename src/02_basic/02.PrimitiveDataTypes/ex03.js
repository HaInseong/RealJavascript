
console.log("========================================3강========================================")
/**
 * 3강
 * 데이터 타입
 * 프리미티브 타입
 * number
 */
let aa = 10;
let bb = 5;
let cc = 3.141592; // 자바스크립트는 number타입 하나로 모든 수를 담는다.
console.log(aa+bb)
console.log(aa-bb)
console.log(aa*bb)
console.log(aa/bb)
console.log(aa**bb) // 거듭제곱 가능

// % modular연산자(나머지 연산자)
// 10 % 2 === 몫5, 나머지0
// x % n === 0, x는 n의 배수
// x % n !== 0, x는 n의 배수가 아니다.
// x % n => 0 ~ n-1
console.log(3%3) // 0
console.log(4%3) // 1
console.log(5%3) // 2
console.log(6%3) // 0
console.log(10%5) // 0
console.log(11%5) // 1
console.log(12%5) // 2
console.log(13%5) // 3
console.log(14%5) // 4 (나머지의 범위는 0~n-1)
console.log(15%5)
for(let i=0; i<10; i++) {
    if(i%3===0) {
        console.log(i, '3의 배수이면 어떤 일을 한다.')
    }
}

let items = ['a', 'b', 'c'];
function getItem(index) {
    if(index < 0 || index > items.length-1) { // 인덱스 선택 범위를 안전하게 지정
        return null;
    }
    return items[index % items.length]; // 어떤 수가 들어와도 배열의 요소를 반환해야하면 모듈러 연산자 사용(나머지 범위 0~n-1활용)
}
console.log(getItem(0))
console.log(getItem(100))
console.log(100%3)

console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)
console.log(Number.NaN) // Not a Number = 수가 아닌 수
console.log(10 / 'a') // NaN = 말도 안되는 연산의 결과
console.log(parseInt('1'))
console.log(parseInt('a')) // NaN
console.log(Infinity) // 양의 무한대 표현 = 다른 언어에서는 무한대를 값으로 제공해주는 경우가 별로 없다. 특별한 경우가 아닌 이상 사용하길 권장하지 않는다.
console.log(-Infinity) // 음의 무한대 표현
console.log(1/0) // 양의 무한대
console.log(-1/0) // 음의 무한대
// 양, 음의 무한대는 다른 프로그램에서는 사용하지 않으므로 호환이 되지 않는다. 그러므로 사용하지 않는 걸 권장.
