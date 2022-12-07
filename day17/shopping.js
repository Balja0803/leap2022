const shoppingCart = ["milk", "coffee", "tea", "honey"];
if (shoppingCart.includes("meat")) {
} else {
  shoppingCart.unshift("meat");
}

if (shoppingCart.includes("sugar")) {
} else {
  shoppingCart.push("sugar");
}

if (shoppingCart.includes("honey")) {
  shoppingCart.splice(4, 1);
}
if (shoppingCart.includes("tea")) {
  shoppingCart.splice(3, 1, "green tea");
}
console.log(shoppingCart);
