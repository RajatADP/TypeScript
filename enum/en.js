var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
    Color[Color["GREEN"] = 2] = "GREEN";
})(Color || (Color = {}));
;
var backgroundColor = Color.BLUE;
console.log(backgroundColor);
