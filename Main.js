"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Triangle_1 = require("./Triangle");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var t = new Triangle_1.Triangle(3, 4, 5);
var c = new Circle_1.Circle(10);
var r = new Rectangle_1.Rectangle(4, 6);
var shapes = [t, c, r];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var s = shapes_1[_i];
    console.log(s.toString());
    console.log("Perimeter:", s.perimeter());
    console.log("Area:", s.area());
}
