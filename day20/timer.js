let rootElement = document.getElementById("root");
rootElement.style.display = "flex";
minuteDiv = document.createElement("div");
secondDiv = document.createElement("div");
rootElement.appendChild(minuteDiv);
rootElement.appendChild(secondDiv);

let i = 0;
let j = 1;
const myInterval = setInterval(function () {
  i++;
  secondDiv.innerText = ":" + i;
  if (i == 60) {
    i = 0;
    minuteDiv.innerText = j++;
    clearInterval(myInterval);
  }
}, 10);
x;
