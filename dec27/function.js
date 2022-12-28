fetch("http://localhost:3333/api/cars")
  .then((res) => res.json())
  .then((res) => console.log(res));

const root = document.getElementById("root");
let allBtn = document.getElementById("allBtn");
let toyoyaBtn = document.getElementById("toyotaBtn");
let lexusBtn = document.getElementById("lexusBtn");

allBtn.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((res) => {
      res.map((car) => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
      });
      console.log("click");
    });
});
