let rootElement = document.getElementById("root");
newDiv = document.createElement("div");
rootElement.appendChild(newDiv);
newDiv.style.width = "50px";
let nemehWidth = "10px";
newDiv.style.height = "50px";
newDiv.style.border = "1px solid black";

let myInterval = setInterval(function () {
  newDiv.style.width++;
  if ((boxWidth = "500px")) {
    clearInterval(myInterval);
  }
}, 100);
