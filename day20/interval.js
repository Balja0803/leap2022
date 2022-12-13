let rootElement = document.getElementById("root");
newDiv = document.createElement("div");
textDiv = document.createElement("div");
newDiv.appendChild(textDiv);
document.getElementsByTagName("body")[0].style.maxWidth = "800px";
let body = document.getElementsByTagName("body")[0];
rootElement.appendChild(newDiv);
newDiv.style.height = "50px";
newDiv.style.border = "1px solid black";
newDiv.style.color = "white";

let count = 0;
let myInterval = setInterval(function () {
  count++;
  newDiv.style.width = `50%`;
  newDiv.innerText = `r(${count}), g (${count}), b (${count})`;
  newDiv.style.backgroundColor = `rgb(${count}, 30, 250)`;
  if (count == "255") {
    clearInterval(myInterval);
  }
}, 20);
