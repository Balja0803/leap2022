/* niilber
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
sum = 0;
for (i = 0; i < arrayOfNumbers.length; i++) {
  sum += arrayOfNumbers[i];
}
console.log(sum);
*/

/* hamgiin ih
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let largestNumber = [];
for (i = 0; i < arrayOfNumbers.length; i++) {
  if (largestNumber < arrayOfNumbers[i]) {
    largestNumber = arrayOfNumbers[i];
  }
}
console.log(largestNumber);
*/

/* hamgiin baga
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];

for (i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[0] > arrayOfNumbers[i]) {
    arrayOfNumbers[0] = arrayOfNumbers[i];
  }
}
console.log(arrayOfNumbers[0]);
*/

// too nemeh
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
arrayOfNumbers.unshift(25);
console.log(arrayOfNumbers);
arrayOfNumbers.push(3);
console.log(arrayOfNumbers);
