// 1번
function Gugudan(n) {
    for(let i=1; i<=9; i++) {
        console.log(`${n} x ${i} = ${n*i}`)
    }
}
Gugudan(5)

// 2번
function Yoon(year) {
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log('윤년입니다.')        
    } else if(year % 100 === 0) {
        console.log('평년입니다.')
    } else {
        console.log(`${year}년 입니다.`)
    }
}
Yoon(2115)

// 3번
let friends = 
[{brand: "카카오", original: [{name: "라이언", age: 8},      
                                {name: "어피치", age: 4},
                                {name: "네온", age: 6}]},
{brand: "라인", original: [{name: "브라운", age: 7},
                            {name: "샐리", age: 6},
                            {name: "제시카", age: 2}]}];

for(let i=0; i<friends.length; i++) {
    let totalAge = 0;
    let totalCount = 0;
    for(let j=0; j<friends[i].original.length; j++) {
        totalAge += friends[i].original[j].age;
        totalCount++;
    }
    let average = totalAge/totalCount;
    console.log(`${friends[i].brand}: ${Math.trunc(average)}`)
}

// 4번
let a = [
    { name : 'SAP'  , grade : '55'},
    { name : 'SYNC' , grade : '100'},
    { name : 'ABAP' , grade : '81'},
    { name : 'Fiori', grade : '77'}
   ]

function grade() {
    for(i=0; i<a.length; i++) {
        if(a[i].grade > 90) {
            console.log('A+')
        } else if(a[i].grade > 80) {
            console.log('A')
        } else if(a[i].grade > 70) {
            console.log('B+')
        } else if(a[i].grade > 60) {
            console.log('B')
        } else if(a[i].grade > 50) {
            console.log('C')
        } else {
            console.log('F')
        }
    }
}
grade()

// 5번
var i = 1;
var result = 0;

for(i ; i<4 ; i++){
     result = result + i;
     if(i == 3){
         console.log(result);
     }
 }