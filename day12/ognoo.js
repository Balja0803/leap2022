let inputYear = prompt("Он");
// let inputMonth = prompt(" Сар");
// let inputDate = prompt(" Өдөр");
// if ((inputYear = NaN)) {
//   alert("please enter number");
// }
let year = Number(inputYear);
if (1900 <= year && year <= 2022) {
  window.alert(year);
} else window.alert("not valid year");
