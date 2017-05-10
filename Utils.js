"use strict";
function classes() {
    var classNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
    }
    return classNames.filter(function (a) { return a && a != ""; }).join(" ");
}
exports.classes = classes;
