const guests = ["danish", "azam", "hamza", "azhar", "umair"];

guests[1] = "haris";

guests.unshift("Raheel");
guests.splice(Math.floor(guests.length / 2), 0, "Imran");
guests.push("Ali");

console.log(`${guests.length} guests are invited to dinner`);
