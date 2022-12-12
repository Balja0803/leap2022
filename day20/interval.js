let rootElement = document.getElementById("root");
newDiv = document.createElement("div");
rootElement.appendChild(newDiv);
newDiv.style.width = "50px";

newDiv.style.height = "50px";
newDiv.style.border = "1px solid black";
let width = 0;
let myInterval = setInterval(function () {
  width++;
  newDiv.style.width = width + "10px";

  if ((boxWidth = "500px")) {
    clearInterval(myInterval);
  }
}, 1000);
