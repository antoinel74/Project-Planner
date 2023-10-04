import { form } from "./form.js";
import { switchState } from "./task-status.js";
import { removeCard } from "./delete-btn.js";
/* import { saveCards, getCards } from "./local-storage.js"; */

const tasksDisplay = document.getElementById("tasks-display");

function createCard(nameValue, descriptionValue, dueDateValue) {
  return {
    name: nameValue,
    description: descriptionValue,
    dueDate: dueDateValue,
  };
}

function addCardtoContainer(card) {
  let newArticle = document.createElement("article");
  
  newArticle.classList.add("card");

  let newDiv = document.createElement("div");
  newDiv.classList.add("card-header");

  let name = document.createElement("h2");
  name.textContent = card.name;
  name.classList.add("card-name");

  let newSpan = document.createElement("span");
  newSpan.classList.add("filter");
  newSpan.classList.add("filter-toDo");
  newSpan.addEventListener("click", () => {
    switchState(newSpan);
  });

  newArticle.appendChild(newDiv);
  newDiv.appendChild(name);
  newDiv.appendChild(newSpan);

  let newDiv2 = document.createElement("div");
  newDiv2.classList.add("card-main");

  let p = document.createElement("p");
  p.textContent = card.description;
  p.classList.add("card-description");

  newArticle.appendChild(newDiv2);
  newDiv2.appendChild(p);

  let newDiv3 = document.createElement("div");
  newDiv3.classList.add("card-footer");

  let svg = document.createElement("svg");

  let newSpan2 = document.createElement("span");
  newSpan2.textContent = card.dueDate;
  newSpan2.classList.add("remaining-time");

  let buttonDelete = document.createElement("button");
  buttonDelete.textContent = "x";
  buttonDelete.classList.add("delete-btn");
  /*   buttonDelete.addEventListener("click", () => {
    removeCard(buttonDelete);
  }); */

  newDiv3.appendChild(newSpan2);
  newDiv3.appendChild(buttonDelete);
  newArticle.appendChild(newDiv3);

  tasksDisplay.appendChild(newArticle);
}

const createCardButton = document.getElementById("create-card-button");
createCardButton.addEventListener("click", () => {
  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("description");
  const dueDateInput = document.getElementById("due-date");

  const nameValue = nameInput.value;
  const descriptionValue = descriptionInput.value;
  const dueDateValue = dueDateInput.value;
  if (dueDateValue) {
    let inputDate = new Date(dueDateValue);
    let todayDate = new Date();

    let differenceTime = inputDate.getTime() - todayDate.getTime();
    let differenceDays = Math.floor(differenceTime / (1000 * 3600 * 24));
    const card = createCard(
      nameValue,
      descriptionValue,
      differenceDays + " days remaining"
    );
    addCardtoContainer(card);
    saveCards(card);
  } else {
    alert("Please enter a deadline !");
  }

  nameInput.value = "";
  descriptionInput.value = "";
  dueDateInput.value = "";
});

document.addEventListener("DOMContentLoaded", () => {
  const savedCards = getCards();
  savedCards.forEach((card) => {
    addCardtoContainer(card);
  });
});
