let output = "";
let count = 1;

for (let row = 1; row <= 4; row++) {
  for (let dash = 4 - row; dash > 0; dash--) {
    output += " ";
  }
  for (let num = 1; num <= row; num++) {
    output += count + " ";
    count++;
  }
  output += "\n";
}
console.log(output);
