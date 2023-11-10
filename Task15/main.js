var guests = ["danish", "azam", "hamza", "azhar", "umair"];
guests.forEach(function (item) {
    return console.log("Dear ".concat(item, ", You are invited to dinner at my place"));
});
console.log("\n");
console.log("Sorry, ".concat(guests[1], " cannot come due to some reasons"));
console.log("\n");
guests[1] = "haris";
guests.forEach(function (item) {
    return console.log("Dear ".concat(item, ", You are invited to dinner at my place"));
});
