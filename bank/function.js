const root = document.getElementById("root");
document.getElementsByTagName("body")[0].style.backgroundColor = "grey";
const getUsers = document.createElement("div");
root.appendChild(getUsers);
getUsers.innerHTML = "<button>Get users</button>";

getUsers.addEventListener("click", () => {
  fetch("http://localhost:3333/api/users")
    .then((res) => res.json())
    .then((res) => {
      res.map((user) => {
        let userInfo = document.createElement("div");
        root.appendChild(userInfo);
        userInfo.innerHTML = `<div>${user.id}</div`;
      });
    });
});
