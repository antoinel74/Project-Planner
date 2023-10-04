const btnModale = document.querySelector(".button-modale");
const bodyTarget = document.querySelector("body");
const headerTarget = bodyTarget.querySelector("header");
const createCardButton = document.getElementById("create-card-button");
const closeModale = document.getElementById("close-modale");

btnModale.addEventListener("click", () => {
  headerTarget.classList.remove("hidden");
});

createCardButton.addEventListener("click", () => {
  headerTarget.classList.add("hidden");
});

closeModale.addEventListener("click", () => {
  headerTarget.classList.add("hidden");
});
