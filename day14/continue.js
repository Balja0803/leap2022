// let i = 0;
// while (i < 10) {
//   i++;
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// prompt prime number shalgah
let n = 8;
let prime = true;
for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    prime = false;
    break;
  }
}

if (prime) {
  console.log("yes");
} else {
  console.log("no");
}
