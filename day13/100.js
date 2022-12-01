let num = 100;
count = 0;
while (num > 0) {
  if (num % 3 == 0) {
    count = count + 1;
  }
  num = num - 1;
}
console.log(count);
