// syncTest.js 파일을 이해하고, function을 적용해보세요. 최대한 의미 있게.

function setEmpInfo(pernr, eName, gender) {
    let empObj = {};
    empObj.pernr = pernr;
    empObj.eName = eName;
    empObj.gender = gender; // 1: 남성, 2: 여성
    empObj.genderText = genderCheck(gender);
    return empObj;
}

function setChiefInfo(chiefId, chiefName, gender) {
    let chiefObj = {};
    chiefObj.chiefId = chiefId;
    chiefObj.chiefName = chiefName;
    chiefObj.gender = gender; // 1: 남성, 2: 여성
    chiefObj.genderText = genderCheck(gender);
    return chiefObj;
}

function genderCheck(gender) {
    if( gender == "1") {
        return "남성";
    } else {
        return "여성";
    }
}

function toString(obj) {
    if(obj === empInfo) {
        return "사원정보: " + obj.pernr + ", " + obj.eName + obj.genderText;
    } else {
        return "Chief 정보: " + obj.chiefId + ", " + obj.chiefName + obj.genderText;
    }
}

let empInfo = setEmpInfo("24010001", "KangSK", "1");
let chiefInfo = setChiefInfo("C0001", "Han Chief", "2");
console.log(toString(empInfo))


/*
function setEmpInfo(pernr, eName, gender) {
    return {
        pernr: pernr,
        eName: eName,
        gender: gender, // 1: 남성, 2: 여성
        genderText: genderCheck(gender)
    };
}

function setChiefInfo(chiefId, chiefName, chiefGender) {
    return {
        chiefId: chiefId,
        chiefName: chiefName,
        gender: chiefGender, // 1: 남성, 2: 여성
        genderText: genderCheck(chiefGender)
    };
}

function genderCheck(gender) {
    return gender === "1" ? "남성" : "여성";
}

function toString(obj) {
   return obj === empInfo ? "사원정보: " + obj.pernr + ", " + obj.eName + ", " + obj.genderText : "Chief 정보: " + obj.chiefId + ", " + obj.chiefName + ", " + obj.genderText
}

let empInfo = setEmpInfo("24010001", "KangSK", "1");
let chiefInfo = setChiefInfo("C0001", "Han Chief", "2");

console.log(toString(empInfo));
console.log(toString(chiefInfo));
*/
