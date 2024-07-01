/**
 * 배열 원소 연산(unshift, shift)
 * 배열의 앞에서 원소를 추가, 삭제하는 방법
 */
{
    const numbers = [1, 2, 3, 4];
    numbers.unshift(0);
    console.log(numbers);
    numbers.unshift(-1);
    console.log(numbers);
    console.log(numbers.shift()); // 배열의 앞에서 원소를 꺼내고, pop처럼 결과값을 반환한다.
    console.log(numbers);
    console.log(numbers.shift());
    console.log([].shift()); // 빈배열에서 shift나 pop을 사용하면 undefined를 반환한다.
  }