var make_shirt = function (size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The size of shirt is ".concat(size, " and the message printed on shirt is '").concat(message, "'"));
};
make_shirt();
make_shirt("medium");
make_shirt("small", "My Shirt");
