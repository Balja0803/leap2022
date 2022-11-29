let x = 10,
  y = 20,
  z = 30;

if (x > y) {
  if (x > z) {
    console.log(x, "n hamgiin ih");
  } else {
    console.log(z, "n hamgiin ih");
  }
} else {
  if (y > z) {
    console.log(y, "n hamgiin ih");
  }
  console.log(z, "n hamgiin ih");
}

if (x > y && x > z) {
  console.log(x, "n hamgiin ih");
} else if (y > z) {
  console.log(y, " n hamgiin ih");
} else {
  console.log(z, " n hamgiin ih");
}

let number = 17;
if (number % 2 == 1) {
  console.log(number, "sondgoi");
}

let num1 = 7;
