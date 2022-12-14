let rootElement = document.getElementById("root");
let r = Math.floor(Math.random() * 255 + 1);
let g = Math.floor(Math.random() * 255 + 1);
let b = Math.floor(Math.random() * 255 + 1);
let bgColor = `rgb(${r},${g},${b}) `;
rootElement.style.maxWidth = "450px";
rootElement.style.display = "flex";
rootElement.style.flexWrap = "wrap";
const oneDiv = document.getElementsByTagName("div");
for (i = 1; i <= 16; i++) {
  let newDiv = rootElement.appendChild(document.createElement("div"));
  newDiv.style.border = "1px solid black";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.backgroundColor = bgColor;
}
oneDiv[
  Math.floor(Math.random() * 14) + 1
].style.backgroundColor = `rgb(${r},${g},${b - 20})`;
