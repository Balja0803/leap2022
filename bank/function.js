const root = document.getElementById("root");
document.getElementsByTagName("body")[0].style.backgroundColor = "grey";
const getUsers = document.createElement("div");
root.appendChild(getUsers);
getUsers.innerHTML = "<button>Get users</button>";
const inputYear = document.createElement("div");
root.appendChild(inputYear);
inputYear.innerHTML =
  "<input id='yearInput' type='number'></input><button id='yearBtn'>Submit</button>";
let yearInput = document.getElementById("yearInput");
let yearBtn = document.getElementById("yearBtn");
getUsers.addEventListener("click", () => {
  fetch("http://localhost:3333/api/users")
    .then((res) => res.json())
    .then((res) => {
      res.map((user, index) => {
        let table = document.createElement("div");
        root.appendChild(table);
        table.style.border = "1px solid black";

        let interestRate = function (isTrue) {
          if (user.balance_type) {
            return "10%";
          } else {
            return "1%";
          }
        };
        yearBtn.addEventListener("click", () => {
          let totalVal = document.querySelector("#totalValue");
          // input value-g boolean-s hamaarch urjuuleh
          totalVal.innerHTML = yearInput.value;
        });
        table.innerHTML = `
  <table>
  <tr>
  <th>id</th>
  <th>name</th>
  <th>balance</th>
  <th>Interest Rate</th>
  <th> Total </th>
  </tr>
  <tr>
  <td>${user.id}</td>
  <td>${user.name}, ${user.surName}</td>
  <td>${user.balance} $</td>
  <td>${interestRate(user.balance_type)}</td>
  <td id='totalValue'></td>
  </tr>
  </table>`;
      });
    });
});
