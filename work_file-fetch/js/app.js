const select = document.getElementById("breeds");
const card = document.querySelector(".card");
fetch("https://dog.ceo/api/breeds/list")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    generateBreeds(data.message);
    generateImage(data.message[0]);
  });

function generateBreeds(data) {
  data.map((dogBreeds) => {
    const html = `<option value ="${dogBreeds}">${dogBreeds}</option> `;
    select.innerHTML += html;
  });
}

function generateImage(url) {
  const image = `<img src="${url}">`;
  card.innerHTML += html;
}

function fetchImage(breedType) {
  fetch(`https://dog.ceo/api/breed/${breedType}/images/random`)
    .then((res) => res.json())
    .then((data) => generateImage(data.message));
}
card.addEventListener("click", () => {
  console.log("clicked");
});
