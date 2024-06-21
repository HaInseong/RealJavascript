/**
 * 데이터 타입
 * 배열 Array
 * - 여러 개의 값을 담는 컬렉션 타입
 * - 데이터의 목록을 표현한다.
 */
// 1. 배열 리터럴 []
const emptyArray = [];
console.log(emptyArray)
let numbers = [1, 2, 3];
console.log(numbers)
const names = ['철수', '영수', '영희'];
console.log(names)
const anyItems = [1, 'two', {name: 'three'}, [4, 5]]; // JS 배열은 배열 하나에 여러 타입을 동시에 담을 수 있다.
// 되도록 하나의 배열에는 한가지 타입만 담는걸 권장한다.
console.log(anyItems)

// 2. Array Constructor
const emptyArray2 = new Array();
console.log(emptyArray2) 

const numbers2 = new Array(1, 2, 3);
console.log(numbers2)

const tenItems = new Array(10);
console.log(tenItems)

// 3. 배열 인덱스(키)
const chars = ['a', 'b', 'c', 'd'];
console.log(chars[0])
console.log(chars[1])
console.log(chars[2])
console.log(chars[3])

console.log(chars[-1]) // 인덱스가 음수이건 양수이건 간에 일단 배열의 길이를 넘어서면 undefined 리턴 = 자바스크립트는 오류에 관대함
console.log([chars[100]]) // 다른 언어에서는 배열 길이를 넘어서서 접근하면 오류 발생 함.
// 그래서 배열에 접근할 때는 인덱스 범위를 검사하는게 중요함.
chars[0] = chars[0].toUpperCase(); // 배열은 mutable
chars[1] = chars[1].toUpperCase();
chars[2] = chars[2].toUpperCase();
chars[3] = chars[3].toUpperCase();
console.log(chars)

// const abcd = 'abcd';
// abcd[0] = abacd[0].toUpperCase(); // 문자열은 immutable

// 4. 배열 길이
const chars2 = ['a', 'b', 'c', 'd', 'e'];
console.log(chars2.length);
const firstIndex = 0;
const lastIndex = chars2.length - 1;
console.log(chars2[firstIndex])
console.log(chars2[lastIndex])

const emptyArray3 = [];
const lastIndex2 = emptyArray3.length - 1;
console.log({lastIndex2});
if(lastIndex2 > 0) {
    //... 배열은 유효성 체크해주는 코드가 좋다.
}
if(emptyArray3.length > 0) {
    //...
}

// 5. 배열 연결
const result = [1, 2].concat([3, 4]);
console.log(result)
