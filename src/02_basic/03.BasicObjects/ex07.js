/**
 * 배열의 구조 분해: 배열이나 객체에서 값을 추출하여 변수에 할당하는 기능
 * 구조 분해를 사용하면 배열이나 객체의 요소를 개별 변수에 할당할 수 있다.
 * 이를 통해, 복잡한 데이터 구조에서 필요한 값을 쉽게 추출할 수 있다.
 */

const [one, two, three, four] = [1, 2, 3, 4]; // 1은 one이라는 변수에 담긴다는 의미.
console.log({one, two, three, four})

const { name, age } =  { name: 'inseong', age: 34};
console.log(name, age)

const [head, ...rest] = [1, 2, 3, 4]; // 나머지 연산자는 항상 마지막에 사용되어야 한다.
console.log({head, rest})

const matrix = [
    [1, 2],
    [3, 4]
];
const [[a, b], [c, d]] = matrix;
console.log({a, b, c, d})
const [[aa]] = matrix;
console.log({aa})

const users = [
    { name2: 'Jim', age2: 10},
    { name2: 'CodingMax', age2:2}
];
const [{ name2 }, { age2 }] = users;
console.log({name2})
console.log({age2})
