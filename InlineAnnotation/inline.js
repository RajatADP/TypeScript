var drawPoint = function (x, y) {
    console.log(x);
    console.log(y);
};
drawPoint(1, 2);
// or
var drawPoint1 = function (point) {
    console.log(point.x);
    console.log(point.y);
};
drawPoint1({
    x: 1,
    y: 2
});
// problem is if we pass name also in drawPoint1 it will accept
// drawPoint1({
//     name: 'Rajat'
// })
// 1- solution
var drawPoint2 = function (point) {
    console.log(point.x);
    console.log(point.y);
};
drawPoint2({
    x: 1,
    y: 2
});
var drawPoint3 = function (point) {
    console.log(point.x);
    console.log(point.y);
};
drawPoint3({
    x: 3,
    y: 4
});
