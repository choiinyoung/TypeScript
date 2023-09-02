"use strict";
var address = "인천";
var age = 28;
// address = 0; // address를 stirng으로 선언해서 err
// age = "나이"; // age를 number로 선언해서 err
console.log(address);
console.log(age);
var a = 0;
// any는 모든 타입의 값을 지정할 수 있음
// but 타입 체크를 확실하게 하기 위해 지양
a = true;
a = "typescript";
a = {};
console.log(a);
// never 타입
// 절대 반환을 하지 않는 함수에 사용
// 도달되지 않는 코드  실행이 종료되지x 무한으로 반복되는 함수 or 오류 발생시키기 위해
var neverTest = function () {
    while (true) {
        console.log("함수가 실행중입니다요ddsssfff");
    }
};
function sayName(value) {
    if (typeof value === "string") {
        return value;
    }
    else {
        return value;
    }
}
