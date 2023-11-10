var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var about_car = function (manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var carDetail = {
        manufacturer: manufacturer,
        model: model,
    };
    if (args.length > 0) {
        args.forEach(function (item) {
            carDetail = __assign(__assign({}, carDetail), item);
        });
    }
    return carDetail;
};
console.log(about_car("Toyota", "Corolla"));
console.log(about_car("Honda", "Civic", { color: "white" }));
console.log(about_car("Suzuki", "Alto", { color: "black" }, { transmission: "auto" }));
