let name = "rehan";
console.log("Is name == rehan?");
console.log(name === "rehan");

console.log("Is name == ali?");
console.log(name !== "rehan");

name = "REHAN";
console.log("Is name == rehan?");
console.log(name.toLowerCase() === "rehan");

name = "rehan";
console.log("Is name == REHAN?");
console.log(name.toUpperCase() === "REHAN");

let number = 2;
console.log("Is 2==2?", number === 2);
console.log("Is 2!=2?", number !== 2);
console.log("Is 2>1?", number > 1);
console.log("Is 2<1?", number < 1);
console.log("Is 2>=1?", number >= 1);
console.log("Is 2<=2?", number <= 2);

console.log("Is 2==2 && name == rehan?", number === 2 && name === "rehan");
console.log("Is 2==3 || name == rehan?", number === 3 || name === "rehan");

export {};
