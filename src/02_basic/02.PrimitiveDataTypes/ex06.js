
console.log("========================================6강========================================")
/**
 * 6강
 * boolean 타입
 * boolean => True, False
 * 논리를 다룰 수 있는 데이터 타입이기 때문에
 * 알고리즘 => 알고리즘의 근간이 되는 것 입니다.
 * 프로그래밍의 근간이 되는 것임.
 */


// 횡단보도를 건넌다.
// 신호등의 불빛 색깔을 본다.
// 1. 기다린다. => 파란불이 될 때까지
// 2. 그냥 무시하고 건넌다.
// 3. 아니면 다른 횡단보도로 간다.
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
    if(!a) { // ★ a가 null이거나 undefined라면 true가 된다.(a의 값이 없을 때 true) 특정 값의 유효성 검사할 때 사용 자주 함.
        console.log('값이 존재하지 않습니다.')
        return null;
    }
    console.log(`값이 있습니다. ${a}`)
    return a;
}
testParams(12) 
testParams('') // false로 간주
testParams(null) // false로 간주
testParams() // false로 간주
testParams(undefined) // false로 간주
testParams('Hello')