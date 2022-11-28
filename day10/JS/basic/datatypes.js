let side1 = 10,
  side2 = 15,
  side3 = 9;
console.log((side1 + side2 + side3) / 2);

let celsius = 15;
let fr = (celsius * 9) / 5 + 32;
console.log(fr);

let far = 95;
let cel = ((far - 32) * 5) / 9;
console.log(cel);

let triangle;
let s1 = 5,
  s2 = 8,
  s3 = 9;
triangle = s1 + s2 + s3;
console.log(triangle);

let circle;
const PI = 3.14;
let radius = 5;
circle = PI * radius * radius;
console.log(circle);

let a = 10,
  b = 12;
console.log("" + a + b);
console.log(a + "" + b);
console.log(a + b + "");

let inputCelsius = prompt("enter celsius to convert");
let farenheit = (inputCelsius * 9) / 5 + 32;
console.log(farenheit);
alert("converted celsius degree is " + farenheit + " fr");

let m;
let y2 = 56,
  y1 = 18,
  x2 = 30,
  x1 = 10;
m = (y2 - y1) / (x2 - x1);
console.log(m);

let capacity;
let usb = 15;
let bit = 8000000000;
capacity = usb * bit;
console.log(capacity);

let centimeter = 10;
let inch = centimeter * 0.393701;
console.log(inch);

let inch1 = 10;
let centimeter1 = inch1 * 2.54;
console.log(centimeter1);

let inputRadius = prompt("enter radius of circle");
let areaCircle = inputRadius * inputRadius * 3.14;
let perimeterCircle = 2 * PI * inputRadius;
console.log(areaCircle);
console.log(perimeterCircle);
alert("Circle radius is " + areaCircle);
