fetch("http://localhost:3333/api/cars")
  .then((res) => res.json())
  .then((res) => console.log(res));

const root = document.getElementById("root");
let allBtn = document.getElementById("allBtn");
root.style.display = "flex";
root.style.flexWrap = "wrap";
root.style.gap = "20px";

allBtn.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((res) => {
      res.map((car, index) => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `<div class="card" style="width: 18rem;">
      <img src="${car.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${car.model}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div class="btn btn-primary" id="btns${index}">
         
        </div>
       
      </div>
    </div>`;
        root.appendChild(newCard);
        let editBTn = document.createElement("a");
        editBTn.innerText = "edit";
        let btns = document.getElementById(`btns${index}`);
        editBTn.addEventListener("click", () => {
          console.log("clicked");
        });
        btns.appendChild(editBTn);
      });
    });
});
