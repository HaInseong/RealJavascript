/**
 * if 문
 */
{
    let items = [];
    if (items.length === 0) {
      console.log('items가 비었습니다.');
    }
  }
  
  {
    let items = ['사과', '바나나'];
    if (items.length === 0) {
      console.log('items가 비었습니다.');
    } else {
      let firstItem = items[0];
      console.log(`첫번째 아이템은 ${firstItem} 입니다.`)
    }
  }
  
  {
    const grade = 85;
  
    // ★ 상위 조건이 하위 조건을 포함하지 않도록 해야한다. = 조건이 많을 때는 위에 있는 조건이 아래에 있는 조건의 범위를 포함해선 안된다.
    // 즉, 위에 있는 조건이 아래에 있는 조건보다 범위가 좁아야 한다. 아래로 갈수록 조건의 범위가 확장되어야 한다.
    if (grade >= 90) {
      console.log('A 학점');
    } else if (grade >= 80) {
      console.log('B 학점');
    } else if (grade >= 70) {
      console.log('C 학점');
    } else {
      console.log('좀 더 분발하세요')
    }
  }