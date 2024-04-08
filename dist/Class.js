"use strict";
var Calendar = (function () {
    function Calendar(month) {
        this.month2 = "Jun";
        this.month1 = month;
    }
    return Calendar;
}());
var calendar = new Calendar("May");
console.log(calendar.month1);
console.log(calendar.month2);
var Calendar2 = (function () {
    function Calendar2(month) {
        this.month = month;
    }
    Calendar2.prototype.getMonth = function () {
        return this.month;
    };
    return Calendar2;
}());
var Calendar3 = (function () {
    function Calendar3(month) {
        this.month = month;
    }
    Calendar3.prototype.getMonth = function () {
        return this.month;
    };
    return Calendar3;
}());
var calendar3 = new Calendar3("April");
var Calendar4 = (function () {
    function Calendar4(month) {
        this.month = month;
    }
    Calendar4.prototype.getMonth = function () {
        return this.month;
    };
    return Calendar4;
}());
var calendar4 = new Calendar4("May");
