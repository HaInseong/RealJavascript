/**
 * 배열 Array
 * - 여러 개의 값을 담는 컬렉션 타입
 * - 데이터의 목록을 표현한다.
 * 
 * 배열 원소 연산(push, pop)
 * 배열의 끝에 추가하고 삭제할 수 있다.
 */
{
    const emptyArray = [];
    console.log(emptyArray.length); // 길이 0
    emptyArray[10] = 'a'; // 배열의 길이보다 큰 어떤 인덱스를 설정하면, 그 인덱스에 해당값을 쓰고 나머지 값들은 undefined로 다 채운다.
    console.log(emptyArray.length); // 그러므로 배열 길이를 벗어나는 인덱스에 값을 임의로 설정하면 안된다.
    console.log(emptyArray);


    const numbers = [1, 2, 3, 4];
    console.log(numbers.length);
    numbers[10] = 10; // 그러므로 배열 길이를 벗어나는 인덱스에 값을 임의로 설정하면 안된다.
    console.log(numbers.length);
    console.log(numbers);
  }
  
  {
    const items = []; // push, pop 메서드를 사용해서 배열의 끝에 값을 임의로 설정 가능하다.
    items.push('a');
    items.push('b');
    console.log(items);
    items.push('c');
    console.log(items);
  
    items.pop(); 
    console.log(items);
    const item = items.pop(); // pop메서드는 배열에서 원소를 꺼낸 값을 반환해준다.
    console.log({ item });
    console.log(items);
    console.log(items);
    console.log(items.pop()); // 빈배열에서 pop을하면 undefined가 반환된다.
    console.log(items);
  }