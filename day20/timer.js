let rootElement = document.getElementById("root");
rootElement.style.display = "flex";
for (i = 1; i <= 3; i++) {
  let newDiv = rootElement.appendChild(document.createElement("div"));
  newDiv.style.border = "1px solid black";
  newDiv.style.width = "50px";
  newDiv.style.height = "25px";
}
let oneDiv = document.getElementsByTagName("div");
let msec = 0;
let sec = 0;
let min = 0;
setInterval(function () {
  msec += 1;
  oneDiv[3].innerText = `${msec}`;
  oneDiv[2].innerText = `${sec}`;
  oneDiv[1].innerText = `${min}`;
  if (msec == 100) {
    msec = 0;
    sec += 1;
  } else if (sec == 60) {
    sec = 0;
    min += 1;
  }
}, 10);
