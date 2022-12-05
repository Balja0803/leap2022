let activities = [
  ["ajil", 10],
  ["ideh", 1],
  ["yriltsah", 2],
  ["togloh", 3],
  ["untah", 8],
];
// console.table(activities);
let percent = [];
for (i = 0; i < activities.length; i++) {
  percent = Math.round((activities[i][1] / 24) * 100);
  percent += " %";
  activities[i].push(percent);
}
console.table(activities);
