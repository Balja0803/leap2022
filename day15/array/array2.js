let studentNames = ["boldo", "dorjo", "tsetsgee", "dulmaa"];
let dNames = [];
let i = 0;
let j = 0;
while (i < studentNames.length) {
  if (studentNames[i][0] == "d") {
    dNames[j] = studentNames[i];
    j++;
  }
  i++;
}
console.log(dNames);
