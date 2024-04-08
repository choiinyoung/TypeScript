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
function sum4() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (result, number) { return result + number; }, 0);
}
console.log(sum4(10, 20, 30));
console.log(sum4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
var userf = {
    name: "inyoung",
    age: 20,
    init: function () {
        var _this = this;
        return function () {
            return _this.age;
        };
    },
};
var getAgef = userf.init();
var agef = getAgef();
console.log(agef);
