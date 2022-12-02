// let n = 3;
// let output = "";
// for (let row = 1; row < n; row++) {
//   for (let col = 1; col < n; col++) {
//     n = "*";
//     output = output + "*";
//   }
//   output += "\n";
// }
// console.log(output);

let num = 5;
let output = "";
for (let row = 1; row < num; row++) {
  for (let col = 1; col < num; col++) {
    if (row > 1 && row < num) {
      output = output + " ";
    } else if (col > 1 && col < num) {
      output = output + " ";
    } else output = output + "* ";
  }
  output = output + "\n";
}
console.log(output);
debugger;
