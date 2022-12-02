// let n = 5;
// let output = "";
// for (let row = 1; row < n; row++) {
//   for (let col = 1; col < n; col++) {
//     if (row == 1 || row == n - 1 || col == 1 || col == n - 1) {
//       output = output + "*";
//     } else {
//       output = output + " ";
//     }

//     debugger;
//   }
//   output = output + "\n";
// }
// console.log(output);

let n = 5;
let output = "";
for (let row = 1; row < n; row++) {
  for (let col = 1; col < n; col++) {
    if (row == 1 || row == n - 1 || col == 1 || col == n - 1) {
      output = output + "*";
    } else {
      output = output + " ";
    }

    debugger;
  }
  output = output + "\n";
}
console.log(output);
