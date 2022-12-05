/*
let arr = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let odd = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    odd++;
    // console.log(arr[i]);
  }
}
console.log(odd);
*/

let arr = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let even = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    even++;
    // console.log(arr[i]);
  }
}
console.log(even);
