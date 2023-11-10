const guests = ["danish", "azam", "hamza", "azhar", "umair"];

guests[1] = "haris";

guests.unshift("Raheel");
guests.splice(Math.floor(guests.length / 2), 0, "Imran");
guests.push("Ali");

console.log("I can only invite two people for dinner\n");

while (guests.length > 2) {
  console.log(
    `Sorry ${guests[guests.length - 1]}, I cannot invite you to the dinner`
  );
  guests.pop();
}

console.log("\n");

guests.forEach((item: string) =>
  console.log(`Dear ${item}, You are still invited to the dinner`)
);

console.log("\n");

guests.splice(0, guests.length);

console.log(guests);
