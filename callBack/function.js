let percent = document.getElementById("percent");
let body = document.querySelector("body");

window.addEventListener("scroll", () => {
  let height = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = height / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  percent.innerText = `${scrollPercentRounded}%`;
  console.log(window.innerHeight);
});
