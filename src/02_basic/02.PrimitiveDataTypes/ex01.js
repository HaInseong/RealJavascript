/**
 * 1강 = CPU, BUS, FATCH OF MEMORY에 대해서 강의(다시듣기 추천)
 */
console.log("========================================1강========================================")
/**
 * 자바스크립트 데이터 타입에 대하여
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

/**
 * cpu가 bus를 통해 메모리로부터 fatch(읽어들임)를 할 때는 64비트 컴퓨터는 8바이트가 기본단위이다.
 * 그러므로 1바이트인 boolean을 선언하더라도 메모리 셀은 8바이트가 기본(word)으로 잡히게 된다.
 */
var age = 9;
// number 8 byte
// boolean 1 byte

const codingMax = {
    age: 30
}
const myDog = { // number타입 8바이트 + boolean타입 8바이트 = cpu가 2번 fatch함. = 기본타입보다 cpu의 연산이 추가 된다.
    age: 2,
    hasBaby: false
}

let n = 10; // number
n = 'Hello'; // 자바스크립트는 동적 타입 언어라서 변수의 타입이 동적으로 변하는 것이 문제되지 않는다.
const sum = n + 20;
console.log({sum});