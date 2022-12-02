// let userInput = prompt("enter your password");
// let password = "123";
// do (userInput === password) {
//   alert("welcome user");
// } else {
//   alert("wrong password");
//   while (userInput !== password) {
//     let userInput = prompt("enter your password");
//   }
// }
// let password = 123;
// let input; //undefined
// while (password !== input) {
//   input = prompt("enter your password:");
// }

let number;

while (true) {
  number = prompt("Enter phone number");
  let firstChar = number.charAt(0);
  number = Number(number);
  if (Number.isInteger(number) && (firstChar == "9" || firstChar == "8")) {
    break; // loop zogsoono
  }
}
