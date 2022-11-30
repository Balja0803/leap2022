// let myString = "single quotes' double quotes \" ";
// console.log(myString);
let babySharkLyrics = "baby shark baby shark \nBaby shark baby shark";
console.log(babySharkLyrics);
console.log(babySharkLyrics.length);
console.log(babySharkLyrics.charAt(0));
console.log(babySharkLyrics[5]);
console.log(babySharkLyrics[babySharkLyrics.length - 1]);
console.log(babySharkLyrics.toUpperCase());
let firstName = "john";
let fullName = firstName.concat(" ", "smith");
console.log(fullName);
console.log(firstName);
console.log(babySharkLyrics.substr(4, 5));
console.log(babySharkLyrics.substring(4, 5));
let str = "this is a string";
console.log(str.indexOf("is"));
console.log(str.substr(0, 2) + " " + str.substr(8, 8));

let myString = "abc is alphabet is not";
console.log(myString.indexOf("is"));
let firstPart = myString.substring(0, myString.indexOf("is"));
let lastPart = myString.substring(
  myString.indexOf("is") + "is".length,
  myString.length
);
console.log(lastPart);
myString = firstPart.concat(lastPart);

firstPart = myString.substring(0, myString.indexOf("is"));
lastPart = myString.substring(
  myString.indexOf("is") + "is".length,
  myString.length
);
myString = firstPart.concat(lastPart);
console.log(myString);
