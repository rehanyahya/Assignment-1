var guests = ["danish", "azam", "hamza", "azhar", "umair"];
guests.forEach(function (item) {
    return console.log("Dear ".concat(item, ", You are invited to dinner at my place"));
});
console.log("\nSorry, ".concat(guests[1], " cannot come due to some reasons\n"));
guests[1] = "haris";
guests.forEach(function (item) {
    return console.log("Dear ".concat(item, ", You are invited to dinner at my place"));
});
console.log("\nI found a bigger dinner table\n");
guests.unshift("Raheel");
guests.splice(Math.floor(guests.length / 2), 0, 'Imran');
guests.push("Ali");
guests.forEach(function (item) {
    return console.log("Dear ".concat(item, ", You are invited to dinner at my place"));
});
