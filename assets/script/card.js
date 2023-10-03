import { form } from "./form.js";
const tasksDisplay = document.getElementById("tasks-display");
/* 
const cards = form();

cards.forEach((card) => {
  let newArticle = document.createElement("article");
  newArticle.classList.add("card");

  let newDiv = document.createElement("div");
  newDiv.classList.add("card-header");

  let name = document.createElement("h2");
  name.textContent = card.name;
  name.classList.add("card-name");

  let newSpan = document.createElement("span");
  newSpan.classList.add("filter");

  newArticle.appendChild(newDiv);
  newDiv.appendChild(name);
  newDiv.appendChild(newSpan);

  let newDiv2 = document.createElement("div");
  newDiv2.classList.add("card-main");

  let p = document.createElement("p");
  p.textContent = card.description;
  p.classList.add("card-description");

  newSection.appendChild(newDiv2);
  newDiv2.appendChild(p);

  let newDiv3 = document.createElement("div");
  newDiv3.classList.add("card-footer");

  let svg = document.createElement("svg");

  let newSpan2 = document.createElement("span");
  newSpan2.textContent = card.dueDate;
  newSpan2.classList.add("remaining-time");

  let button = document.createElement("button");
  button.textContent = "Delete";
  button.classList.add("delete");

  newSection.appendChild(newDiv3);
  newDiv3.appendChild(svg);
  newDiv3.appendChild(newSpan2);
  newDiv3.appendChild(button);

  tasksDisplay.appendChild(newArticle);
});

export { card }; */

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

  newDiv3.appendChild(newSpan2);
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

  // Create a new card and add it to the display
  const card = createCard(nameValue, descriptionValue, dueDateValue);
  addCardtoContainer(card);

  // Clear input fields
  nameInput.value = "";
  descriptionInput.value = "";
  dueDateInput.value = "";
});
