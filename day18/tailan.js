const data = [
  {
    productName: "bakery",
    unitPrice: 5000,
    amount: 200,
    totalPrice: 5_000_000,
    cashierId: 1,
    date: "2022-11-01",
  },
  {
    productName: "chocolate",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 54_000,
    cashierId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Soft Drink 200ml",
    unitPrice: 2500,
    amount: 200,
    totalPrice: 250_000,
    cashierId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Candy",
    unitPrice: 250,
    amount: 500,
    totalPrice: 50_000,
    cashierId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Coffee",
    unitPrice: 3500,
    amount: 500,
    totalPrice: 350_000,
    cashierId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Potato Chips",
    unitPrice: 2500,
    amount: 150,
    totalPrice: 125_000,
    cashierId: 1,
    date: "2022-11-01",
  },
];
function borluulalt(list) {
  let sum = 0;
  for (i = 0; i < data.length; i++) {
    sum += data[i].totalPrice;
  }
  return sum;
}
console.log(borluulalt(data));
function niitBorluulalt(list) {
  let sum = 0;
  for (i = 0; i < data.length; i++) {
    sum += data[i].totalPrice / data[i].unitPrice;
  }
  return sum;
}
console.log(niitBorluulalt(data));
function mostBorluulalt(list) {
  let borluulaltBaraa = [];
  for (i = 0; i < data.length; i++) {}
}
