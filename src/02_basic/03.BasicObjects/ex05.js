/**
 * 배열 원소 연산
 * splice = 배열의 임의 인덱스에 원소를 추가, 삭제하고 싶을 때
 * delete 키워드는 값을 지우는게 아니라 undefiend로 인덱스를 대체하므로 원소 삭제는 splice를 주로 쓴다.
 * splice(startIndex, deleteCount, items) 
 * delete는 삭제할 원소 수를 지정한다.
 * items는 어떤 원소를 추가할 때 사용한다.
 * splice 메서드는 원소 삭제, 교체, 추가 가능한 강력한 메서드.
 */
const numbers = [1, 2, 3, 4];
const item = numbers.splice(1, 0, 'a'); // 삭제할 원소수가 0이므로 원소 추가.
console.log({ item });
console.log({ numbers });

const numbers0 = [1, 2, 3, 4];
const item0 = numbers0.splice(1, 1); // splice는 결과값을 배열로 반환한다. = 결과값이 여러 개 일 수 있으므로
console.log({ item0 });
console.log({ numbers0 });

const numbers1 = [1, 2, 3, 4];
const item1 = numbers1.splice(1, 1, 'two'); // splice는 삭제한 원소를 반환한다.
console.log({ item1 });
console.log({ numbers1 });

const numbers2 = [1, 2, 3, 4];
const item2 = numbers2.splice(1, 2, 'two', 'three'); 
console.log({ item2 });
console.log({ numbers2 });

const numbers3 = [1, 2, 3, 4];
const item3 = numbers3.splice(1, 2, 'two', 'three', 'four'); // 반드시 deleteCount와 items의 수가 같을 필요는 없다.
console.log({ item3 });
console.log({ numbers3 });

const numbers4 = [1, 2, 3, 4];
console.log(numbers4.splice()); // 아무것도 삭제되지 않음.
console.log(numbers4.splice(1)); // 인덱스 1부터 삭제되서 다 반환된다 = 값 복사로도 쓰일 수 있다.