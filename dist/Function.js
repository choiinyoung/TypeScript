"use strict";
function sum(number1, number2) {
    return number1 + number2;
}
console.log(sum(10, 20));
function inChildern(age) {
    return age < 19;
}
console.log(inChildern(30));
console.log(inChildern(10));
function sum2(number1, number2) {
    console.log(number1 + number2);
}
function morning(name) {
    return "Good morning ".concat(name || "everyone");
}
console.log(morning());
console.log(morning("mjo"));
function morning2(name, time) {
    return "Good morning ".concat(name || "everyone", ",Time is ").concat(time || 8);
}
console.log(morning2("mjo", 7));
console.log(morning2(undefined, 123));
function sum3(a, b) {
    if (b === void 0) { b = 2024; }
    return a + b;
}
console.log(sum3(10, undefined));
console.log(sum3(10));
