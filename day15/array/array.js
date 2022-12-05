let students = ["bata", "dorjo", "baatardorj", "selenge", "tuul"];
let lname = students[0];
max = lname.length;
for (let i = 1; i < students.length; i++) {
  if (max < students[i].length) {
    lname = students[i];
    max = students[i].length;
    console.log(max);
  }
}
// console.log(max);
