/**
 * 배열 원소 연산
 * slice: 배열 자르기 = 원본 배열은 삭제되지 않는다는게 splice와 가장 큰 차이
 */
{
    const numbers = [1, 2, 3, 4];
    const subNumbers = numbers.slice(1, 3); // 1, 2 인덱스까지 자른다. 마지막 3번 인덱스는 포함되지 않는다.
    console.log(subNumbers);
    console.log(numbers);
    const sub2 = numbers.slice(1); // 1번 인덱스부터 배열 끝까지 자르기
    console.log(sub2);
    const sub3 = numbers.slice(); // 배열 전체 자르기
    console.log(sub3);
  }
  
  {
    const items = [
      1,
      {
        name: 'CodingMax'
      }
    ];
    const newItems = items.slice();
    console.log(items);
    console.log(newItems);
    newItems[0] = 10;
    newItems[1].name = '코딩맥스';
    console.log(items); // 기본타입은 값복사라 원본에 영향을 주지 않았음. 
    // slice는 얕은 복사를 하기 때문에, 참조형을 가르키는 참조 포인트만 복사하기 때문에 원본도 '코딩맥스'로 같이 바뀜.
    console.log(newItems);
  }