var youngName = "young";
var numArr = [1, 2, 3, 4];
var strArr = ["월", "화", "수"];
var comObj = {};
var youngObj = {
    name: "young",
    age: 25,
    hobbies: ["sleep", "youtube"],
};
// null,undefined
var nullData = null;
var undefinedData = undefined;
// Tuple
var tupleOne = [1, "young", { isMember: false }];
// Enum
var MemberGrade;
(function (MemberGrade) {
    MemberGrade[MemberGrade["guest"] = 0] = "guest";
    MemberGrade[MemberGrade["user"] = 1] = "user";
    MemberGrade[MemberGrade["member"] = 2] = "member";
    MemberGrade[MemberGrade["admin"] = 3] = "admin";
})(MemberGrade || (MemberGrade = {}));
var userGrade = 1;
if (userGrade !== 3) {
    alert("관리자가 아님");
}
if (userGrade !== MemberGrade.admin) {
    alert("관리자가 아님");
}
// Union
var unionType = 1;
var gender = "M";
// 함수 타입 설정
function add1(num1, num2) {
    return num1 + num2;
}
var add2 = function (num1, num2) {
    return num1 + num2;
};
var add3 = function (num1, num2) {
    return num1 + num2;
};
// void  타입 함수
function userConsole(str) {
    console.log(str);
}
var userConsole2 = function (str) {
    console.log(str);
};
var userConsole3 = function (str) {
    console.log(str);
};
// never 타입 함수
function occurError(err) {
    throw new Error(err);
}
function infinite() {
    while (true)
        console.log("무한");
}
var dontKnow = 1;
var studentGrade = "A";
var studentsGradeArr = ["A", "F", "C"];
var youngInfo = {
    name: "young",
    id: "d",
    age: 25,
    isMenber: true,
};
youngInfo[1] = "A";
var userData = [
    { name: "lee", id: "faker", age: 25, isMenber: false },
    { name: "rye", id: "keria", age: 20 },
];
var interfaceAdd = function (x, y) {
    return x + y;
};
var interfaceAdd2 = function (x, y) {
    return x + y;
};
var sumResult = interfaceAdd(1, 3);
console.log(sumResult);
