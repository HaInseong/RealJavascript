// 실습 문제
function getSalary(crewId, lastName, firstName, workTime, wage=9000) { 
    let crew = {};
    crew.crewId = crewId;
    crew.lastName = lastName;
    crew.firstName = firstName;
    crew.workTime = workTime; // workTime 속성 추가
    crew.wage = wage*workTime;
    if (wage < 9000) {
        crew.wage = 9860;
    }
    return crew;
}

let result = getSalary(2, "하", "인성", 8, 15000); // crewId는 숫자여야 하므로 02 -> 2로 수정
let result2 = getSalary(2, "하", "인성", 8); 
console.log(result);
console.log(result2)