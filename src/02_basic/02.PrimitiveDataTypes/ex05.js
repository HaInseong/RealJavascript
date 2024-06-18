

console.log("========================================5강========================================")
/**
 * 5강
 * 문자열(String) 타입
 * 여러 문자의 모음
 * a, b, c, d
 * "", ''
 */
console.log('abcd'.length)
let name = 'CodingMax';
let name2 = 'A'; // 자바스크립트는 문자열이나 문자나 똑같이 처리. but 문자열은 수정할 수 없다.
let firstIndex = 0;
let lastIndex = name.length-1;
console.log(name[0])
console.log(name[name.length-1])
for(let i=0; i<name.length; i++) {
    console.log(name[i])
}
Array(name) // name 문자열을 배열로 변경
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

console.log(String.raw`Hello\nWorld`); // String.raw = 이스케이프 문자 \n도 출력가능
const msg = `안녕하세요~
오늘은 날씨가 좋네요~
커피 한잔 어때요?`
console.log(msg)