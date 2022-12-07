let ih = (a, b) => {
  if (a > b) {
    return a + " ih";
  } else {
    return b + " ih";
  }
};
let input = 9;
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 16];
function myFunct(num) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    } else {
      return "-1";
    }
  }
}
let result = myFunct(input);
console.log(result);
