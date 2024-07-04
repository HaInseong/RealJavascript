// 자바스크립트 메소드

let oCrew = {
    crewId: "C2001",
    lastName: "Kang",
    firstName: "SK",
    hourPrice: 10000,
    getCrewInfo: function() {
        //alert("Method");
        return this.lastName + this.firstName; // 메소드 안에서 속성 접근시 this 사용해야 함
    }
};
let crewName = oCrew.getCrewInfo();
alert(crewName);
console.log(crewName);