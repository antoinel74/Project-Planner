const cardElements = document.querySelectorAll(".card");

function displayToDo() {
  cardElements.forEach((card) => {
    const cardStatus = card.querySelector(".filter");

    if (!cardStatus.classList.contains("filter-toDo")) {
      card.style.display = "none";
    } else {
      card.style.display = "block";
    }
  });
}

const filterTodoBtn = document.getElementById("sortToDo");
filterTodoBtn.addEventListener("click", displayToDo);
