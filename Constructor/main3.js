//unique feature of typescript
var Point4 = /** @class */ (function () {
    function Point4(x, y) {
        this.x = x;
        this.y = y;
    }
    Point4.prototype.draw = function () {
        console.log('x: ' + this.x, ' y: ' + this.y);
    };
    Point4.prototype.setX = function (value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0');
        this.x = value;
    };
    Point4.prototype.getX = function () {
        return this.x;
    };
    return Point4;
}());
var point4 = new Point4(1, 2);
point4.draw();
point4.setX(4);
var x = point4.getX();
console.log(x);
