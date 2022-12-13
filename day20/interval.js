let rootElement = document.getElementById("root");
newDiv = document.createElement("div");
rootElement.appendChild(newDiv);
newDiv.style.width = "50px";
let width = "";
setInterval(function () {
  width++;
  newDiv.style.width += width;
}, 100);
newDiv.style.height = "50px";
newDiv.style.border = "1px solid black";
