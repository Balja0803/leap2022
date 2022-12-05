let n = [1231231];
let count = [];
n.foreach((element) => {
  count[element] = (count[element] || 0) + 1;
});
console.log(count);
