const btnModale = document.querySelector(".button-modale");
const bodyTarget = document.querySelector("body");
const headerTarget = bodyTarget.querySelector("header");
// const hiddenTarget = bodyTarget.querySelector("#modale");

btnModale.addEventListener("click", () => {
  headerTarget.classList.remove("hidden");
});
