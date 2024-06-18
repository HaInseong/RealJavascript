
console.log("========================================4강========================================")
/**
 * 4강 (소수를 2진수로 표현하는 방식 다시 듣기)
 * 부동소수점
 * 뜰 부, 움직일 동
 * 소수점이 움직인다는 의미
 * 123.5 => 123.5 고정소수점으로 컴퓨터가 소수점을 그대로 표현하는게 아니라
 * 컴퓨터는 123.5 => 1.235 * 10^2 방식으로 소수점을 표현함(컴퓨터는 0과 1의 2진수)
 * 한정된 메모리 공간에서 좀더 넓은 범위의 소수를 표현하기 위해 부동소수점을 선택함
 * ex) 12.5 = 컴퓨터는 이를 2진수로 표현해야한다.
 * 먼저, 컴퓨터는 우선 정수 12와 소수 0.5로 나눈다 - 소수부가 0이되면 거기서 끝낸다. - 소수부의 2진수는 1이된다.
 * 소수를 2진수로 표현하려면 0.5에 2를 계속 곱한다.
 * 0.3처럼 소수부의 2진수 계산이 영원히 끝나지 않는 수들이 존재한다.
 * 이럴 때는 정밀도를 설정해서 범위를 설정한다.
 */
console.log(0.1)
console.log(0.2)
console.log(0.1 + 0.2) // 끝에 4가 붙음
console.log(0.1 + 0.2 === 0.3) // true가 아닌 false가 나옴
// 2진수로 표현할 수 없는 소수들을 위해서 특별한 수인 앱실론을 새로 만들어야한다.
console.log(Number.EPSILON) // ★ 부동소수점 문제 때문에 굉장히 작은 수인 EPSILON을 만들어서 소수 비교를 한다.
console.log((0.1 + 0.2) - 0.3 < Number.EPSILON) // 소수점 계산 결과가 TRUE면 두 수는 같은걸로 볼 수 있다.

function compareNumbers(a, b) {
    return Math.abs(a-b) < Number.EPSILON;
    // ★ 소수점을 가진 두수의 차가 아주 작은 특별수 앱실론보다 작으면 같다고 보는 것
}
const result3 = compareNumbers(0.1+0.2, 0.3)
console.log(result3)