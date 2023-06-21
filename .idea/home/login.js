const username = "myUsername";
const password = "myPassword";

//function to handle login//
function login(user, pass) {
if (user === username && pass === password) {
console.log("Login Successful!);

//perform any actions after successful login//
} else {
console.log ("Incorrect username or password, try again.");}
}
login ("myUsername","myPassword");