const usernames = ["admin", "eric", "john", "sally", "susan"];

usernames.forEach((item) => {
  if (item === "admin") {
    console.log(`Hello ${item}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${item}, thank you for logging in again.`);
  }
});
