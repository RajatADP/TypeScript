//creating object of Point1 without knowledge of parameters
//? means not compulsory - typescript multiple constructor not possible
var Point2 = /** @class */ (function () {
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2.prototype.draw = function () {
        console.log('x: ' + this.x, ' y: ' + this.y);
    };
    return Point2;
}());
var point2 = new Point2();
point2.draw();
