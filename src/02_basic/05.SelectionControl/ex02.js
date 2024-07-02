/**
 * switch 조건문 또는 선택문
 * 어떤 표현식(expression)이 있을 때 결과 값이 여러 개인 경우, 
 * if문을 사용하기 보다는 switch 문을 사용하는 것이 조금 더 깔끔합니다.
 * switch (expression) {
 *  case value1 :
 *      // 실행할 코드
 *      break;
 *      default : ( else문과 같다 )
 *      break; 
 * }
*/
{
    let day = '수요일';
    switch (day) {
      case '월요일':
        console.log('아 월요일이구나. 출근해야지.');
        break;
      case '화요일':
      case '수요일':
      case '목요일':
        console.log('출퇴근');
        break;
      case '금요일':
        console.log('불금이다!!!');
      case '토요일':
      case '일요일':
        console.log('신나게 놀자!');
        break;
    }
  }
  
  {
    let day = 'monday';
    switch (day) {
      case '월요일':
        console.log('아 월요일이구나. 출근해야지.');
        break;
      case '화요일':
      case '수요일':
      case '목요일':
        console.log('출퇴근');
        break;
      case '금요일':
        console.log('불금이다!!!');
      case '토요일':
      case '일요일':
        console.log('신나게 놀자!');
        break;
      default:
        console.log('요일을 월요일, ..., 일요일 과 같이 한글로 입력해 주세요.');
        break;
    } 
    
    // 결과 값이 여러 개 일 경우 if문보다 switch문이 더 깔끔하다는 것을 볼 수 있다.
    if (day === '월요일') {
      console.log('아 월요일이구나. 출근해야지.');
    } else if (day === '화요일' || day === '수요일' || day === '목요일') {
      console.log('출퇴근');
    } else if (day === '금요일') {
      console.log('불금이다!!!');
    } else if (day === '토요일' || day === '일요일') {
      console.log('신나게 놀자!');
    } else {
      console.log('요일을 월요일, ..., 일요일 과 같이 한글로 입력해 주세요.');
    }
  }
  
  {
    let n = 1;
    console.log(n == '1');
    console.log(n === '1');
  
    switch (n) {
      case '1':
        console.log('== 을 사용합니다');
        break;
      case 1:
        console.log('=== 을 사용합니다');
        break;
      default:
        console.log('어떤 비교 연산자를 사용하나요?');
        break;
    }
  }