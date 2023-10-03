import { form } from "./form.js";
form();

const tasksDisplay = document.getElementById("tasks-display");

class Card {
  constructor(nameValue, descriptionValue, dueDateValue) {
    this.name = nameValue;
    this.description = descriptionValue;
    this.dueDate = dueDateValue;
  }
}

Card.forEach((card) => {
  card.forEach((task) => {
    console.log(name);
    let newArticle = document.createElement("article");
    newArticle.classList.add("card");

    let newDiv = document.createElement("div");
    newDiv.classList.add("card-header");

    let name = document.createElement("h2");
    name.textContent = task.name;
    name.classList.add("card-name");

    let newSpan = document.createElement("span");
    newSpan.classList.add("filter");

    newArticle.appendChild(newDiv);
    newDiv.appendChild(name);
    newDiv.appendChild(newSpan);

    let newDiv2 = document.createElement("div");
    newDiv2.classList.add("card-main");

    let p = document.createElement("p");
    p.textContent = task.description;
    p.classList.add("card-description");

    newSection.appendChild(newDiv2);
    newDiv2.appendChild(p);

    let newDiv3 = document.createElement("div");
    newDiv3.classList.add("card-footer");

    let svg = document.createElement("svg");

    let newSpan2 = document.createElement("span");
    newSpan2.textContent = task.dueDate;
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
});

export { Card };
