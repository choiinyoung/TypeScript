"use strict";
var user1 = {
    name: "인영",
    age: 20,
};
var user2 = {};
user1.name = "안녕";
user1.age = 5;
var addNumber1 = function (x, y) {
    return x + y;
};
addNumber1(10, 10);
function getAge(obj) {
    console.log(obj.name);
    console.log(obj.age);
}
var person = {
    name: "이녕ㅇ",
    age: 3,
};
getAge(person);
