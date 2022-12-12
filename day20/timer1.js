sec = 0;
min = 0;
hour = 0;
setInterval(function () {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
  }
}, 10);
rootElement.innerText = `00:${min < 10 ? "0" : ""}${min}:${sec}`;
