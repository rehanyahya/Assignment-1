const guests = ["danish", "azam", "hamza", "azhar", "umair"];

guests.forEach((item: string) =>
  console.log(`Dear ${item}, You are invited to dinner at my place`)
);
console.log("\n");
console.log(`Sorry, ${guests[1]} cannot come due to some reasons`);
console.log("\n");
guests[1] = "haris";
guests.forEach((item: string) =>
  console.log(`Dear ${item}, You are invited to dinner at my place`)
);
