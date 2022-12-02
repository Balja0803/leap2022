let number = "12313123112312";
// number = "12_313_123_112_312"
for (;;) {
  number =
    number.substring(0, number.length - 3) +
    "_" +
    number.substring(number.substring(number.length - 3, number.length));
  console.log(number);
}
