var usernames = ["admin", "eric", "john", "sally", "susan"];
usernames.forEach(function (item) {
    if (item === "admin") {
        console.log("Hello ".concat(item, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(item, ", thank you for logging in again."));
    }
});
