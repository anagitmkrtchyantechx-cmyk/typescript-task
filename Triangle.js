"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var ShapeInfo_1 = require("./ShapeInfo");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(a, b, c) {
        var _this = _super.call(this, "triangle") || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Triangle.prototype.perimeter = function () {
        return this.a + this.b + this.c;
    };
    Triangle.prototype.area = function () {
        var p = this.perimeter() / 2;
        if (!this.isTriangle) {
            throw new Error("This is not triangle");
        }
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    };
    Triangle.prototype.isTriangle = function () {
        var a = this.a;
        var b = this.b;
        var c = this.c;
        if (a >= b + c) {
            return false;
        }
        else if (b >= a + c) {
            return false;
        }
        else if (c >= a + b) {
            return false;
        }
        return true;
    };
    return Triangle;
}(ShapeInfo_1.ShapeInfo));
exports.Triangle = Triangle;
