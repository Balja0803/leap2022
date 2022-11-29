let age = 15;
if (age < 21) {
  console.log("no alcohol");
} else {
  console.log(allowed);
}

age < 21 ? console.log("no alcohol") : console.log(allowed);

let myState = age >= 10 && age <= 18 ? "teenage" : "adult";
