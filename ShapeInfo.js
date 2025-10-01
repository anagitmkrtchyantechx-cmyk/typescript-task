"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeInfo = void 0;
var ShapeInfo = /** @class */ (function () {
    function ShapeInfo(name) {
        this.name = name;
    }
    ShapeInfo.prototype.toString = function () {
        return "This figure is " + this.name;
    };
    return ShapeInfo;
}());
exports.ShapeInfo = ShapeInfo;
