let rootElement = document.getElementById("root");
let ulElement = document.createElement("ul");
rootElement.appendChild(ulElement);

for (let i = 1; i <= 100; i++) {
  let liElement = document.createElement("li");
  liElement.innerText = i.toString();
  ulElement.appendChild(liElement);
}
