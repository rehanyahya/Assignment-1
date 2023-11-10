var names = ["John", "Susan", "Alex"];
var modifiedNames = make_great();
function make_great() {
    return names.map(function (item) { return "".concat(item, " the Great"); });
}
var show_magicians = function (_names) {
    _names.forEach(function (item) {
        console.log(item);
    });
};
show_magicians(names);
show_magicians(modifiedNames);
