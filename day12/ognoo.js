let inputYear = prompt("Он");
// let inputMonth = prompt(" Сар");
// let inputDate = prompt(" Өдөр");
// if ((inputYear = NaN)) {
//   alert("please enter number");
// }
let year = Number(inputYear);
if (1900 <= year <= 2022) {
  alert(inputYear);
} else warning("not valid year");
