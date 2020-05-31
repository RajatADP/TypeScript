//unique feature of typescript
var Point3 = /** @class */ (function () {
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    }
    Point3.prototype.draw = function () {
        console.log('x: ' + this.x, ' y: ' + this.y);
    };
    return Point3;
}());
var point3 = new Point3(1, 2);
point3.draw();
