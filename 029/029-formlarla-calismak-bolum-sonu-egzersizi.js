let userformdom = document.querySelector("#userForm");
userformdom.addEventListener("submit", formhandler);
const alertdom = document.querySelector("#alert")

const alertfunction = (title,message,classname="warning") => `<div class="alert alert-${classname} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>;`


function formhandler(event) {
  event.preventDefault();
  const USER_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("#score");

  if(USER_NAME.value && SCORE.value){
    additem(USER_NAME.value, SCORE.value);
    USER_NAME.value=""
    SCORE.value=""
}
else {
    alertdom.innerHTML = alertfunction("Hata!","Eksik Bilgi Girdiniz!","danger")
}
}

let userlistdom = document.querySelector("#userlist");

const additem = (username, score) => {
  let lidom = document.createElement("li");
  lidom.innerHTML = `<div class="ms-2 me-auto">
    <div class="fw-bold">${username}</div>
  </div>
    <span class="badge bg-primary rounded-pill">${score}</span>`;
  lidom.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-start"
  );
  userlistdom.append(lidom);
};

