var animals = ["cat", "dog", "goat"];
animals.forEach(function (item) { return console.log(item); });
animals.forEach(function (item) { return console.log("A ".concat(item, " would make a great pet.")); });
console.log("Cat would make a great pet!");
