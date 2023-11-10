var names = ["John", "Susan", "Alex"];
var make_great = function () {
    for (var i = 0; i < names.length; i++) {
        names[i] = "".concat(names[i], " the Great");
    }
};
var show_magicians = function (_names) {
    _names.forEach(function (item) {
        console.log(item);
    });
};
make_great();
show_magicians(names);
