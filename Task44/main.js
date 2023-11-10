var make_sandwich = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("A person wants a ".concat(items.join(", "), " on a sandwich"));
};
make_sandwich("cucumber");
make_sandwich("cucumber", "tomatoes");
make_sandwich("cucumber", "jalapeno", "olives");
