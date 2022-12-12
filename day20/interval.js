let rootElement = document.getElementById("root");
newDiv = document.createElement("div");
rootElement.appendChild(newDiv);

setInterval(function () {
  newDiv.style.width = "30px";
  newDiv.style.width++;
}, 1000);
newDiv.style.height = "50px";
newDiv.style.border = "1px solid black";
