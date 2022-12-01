let a = 1,
  b = 1,
  c = a + b;
let count = 1;
while (c <= 100) {
  a = b;
  b = c;
  c = a + b;
  count++;
  console.log(a, b, c);
}
