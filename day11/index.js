// let myAge = 30;
// if (myAge < 11) {
//   console.log("you are in your baby state");
// } else if (myAge < 18) {
//   console.log("you are in your teen state");
// } else if (myAge < 40) {
//   console.log("you are in your adult state");
// } else {
//   console.log("you are in your teen state");
// }

let weekNumber = 3;
let weekName;
if (weekNumber == 1) {
  weekName = "monday";
} else if (weekNumber == 2) {
  weekName = "Tuesday";
} else if (weekNumber == 3) {
  weekName = "Wednesday";
} else if (weekNumber == 4) {
  weekName = "Thursday";
} else if (weekNumber == 5) {
  weekName = "Friday";
} else if (weekNumber == 6) {
  weekName = "Saturday";
} else if (weekNumber == 7) {
  weekName = "Sunday";
} else {
  console.log("the date you entered is invalid");
}
console.log("your input date is " + weekName);

let weekday = 4;
switch (weekday) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("not a day");
}

let weekDay = 6;
switch (weekDay) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("working day");
    break;
  case 6:
  case 7:
    console.log("weekends");
    break;
  default:
    console.log("not valid");
}
