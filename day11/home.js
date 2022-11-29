let firstScore = 96;
let secondScore = 108;
let thirdScore = 99;
let scoreA = (firstScore + secondScore + thirdScore) / 3;

let Firstscore = 98;
let Secondscore = 91;
let Thirdscore = 110;
let scoreB = (Firstscore + Secondscore + Thirdscore) / 3;

if (scoreA > scoreB && scoreA >= 100) {
  console.log("A team won");
} else if (scoreB > scoreA && scoreB >= 100) {
  console.log("B team won");
} else if (scoreB === scoreA && scoreA >= 100 && scoreB >= 100) {
  console.log("both team draw");
} else {
  console.log("No winner");
}

// if (scoreA > scoreB && scoreA >= 100 && scoreB >= 100) {
//   console.log("Team A has won");
// } else if (scoreB > scoreA && scoreA >= 100 && scoreB >= 100) {
//   console.log("Team B has won");
// } else{
// }
