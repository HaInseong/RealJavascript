let oEmp = {};
oEmp.pernr = "24010001";
oEmp.eName = "KangSK";
oEmp.gender = "1"; // 1: 남성, 2: 여성
if( oEmp.gender == "1") {
    oEmp.genderText = "남성";
} else {
    oEmp.genderText = "여성";
}
let sContent = "사원정보: " + oEmp.pernr + ", " + oEmp.eName + ", " + oEmp.genderText;
console.log(sContent)

let chiefId = "C0001";
let chiefName = "Han Chief";
let chiefGender = "2"; // 1: 남성, 2: 여성
let chiefGenderText;
switch(chiefGender) {
    case "2":
            chiefenderText = "여성";
            break;
    case "1":
            chiefGender= "남성";
            break;
}

sContent = "Chief 정보: " + chiefId + ", " + chiefName + chiefGenderText;
console.log(sContent);

