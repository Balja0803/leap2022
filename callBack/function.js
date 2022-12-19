let percent = document.getElementById("percent");
let body = document.querySelector("body");

window.addEventListener("scroll", () => {
  let height = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = height / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  percent.innerText = `${scrollPercentRounded}%`;
});

let names = [jam, jem, jen, jan];

let arrForEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    cb(element);
  }
};
arrForEach(names, (name) => {
  console.log(name);
});
