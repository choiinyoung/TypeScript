"use strict";
var list = [1, 2, 3, 4, 5];
var member = ["gg", "ss", "인용"];
console.log(member);
member.push("ㅎㄷ");
console.log(member);
var memberany = ["이뇽", 10, true, null];
var memberunion = [
    "이뇽",
    10,
    true,
    null,
];
var str = ["이뇽", 10];
var str2 = ["ㅎㅎ", 25];
console.log(str);
console.log(str2);
var arr1 = [function () { return "이뇽"; }, function () { return "ㅎㅎ"; }];
console.log(arr1[0]());
for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
    var fn = arr1_1[_i];
    console.log(fn());
}
