"use strict";
var text = 22;
console.log(text);
text = "ㅎㅎ";
console.log(text);
function combine(person) {
    person.name;
}
function combine2(input1, input2) {
    var result;
    if (typeof input1 == "number" && typeof input2 == "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine2("hello", "world"));
function checkType(pet) {
    if ("meow" in pet) {
        pet.meow();
    }
    else {
        pet.bowwow();
    }
}
