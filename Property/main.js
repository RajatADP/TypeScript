//property typescript looks like variable but behave as function
var Point5 = /** @class */ (function () {
    function Point5(x, y) {
        this.x = x;
        this.y = y;
    }
    Point5.prototype.draw = function () {
        console.log('x: ' + this.x, ' y: ' + this.y);
    };
    Object.defineProperty(Point5.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('Value cannot be less than 0');
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point5;
}());
var point5 = new Point5(1, 2);
point5.draw();
point5.X = 4;
var x1 = point5.X;
console.log(x1);
