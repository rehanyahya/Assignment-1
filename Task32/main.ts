const current_users = ["adam", "eric", "john", "sally", "susan"];
const new_users = ["sussy", "ADAM", "max", "sally", "billy"];
let isUsernameAvailable = false;

for (let i = 0; i < new_users.length; i++) {
  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      isUsernameAvailable = true;
      break;
    } else {
      isUsernameAvailable = false;
    }
  }
  if (isUsernameAvailable) {
    console.log("Username not available");
  } else {
    console.log("Username is available.");
  }
}
