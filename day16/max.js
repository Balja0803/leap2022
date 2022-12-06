const ih = (a, b, c) => {
  if (a > b && a > c) {
    return "a ih";
  } else if (b > a && b > c) {
    return "b ih";
  } else {
    return "c ih";
  }
};

let result = ih(6, 2, 3);
console.log(result);
