function sortCardsByName() {
  const cardElements = Array.from(document.querySelectorAll(".card"));

  cardElements.sort((a, b) => {
    const nameA = a.querySelector(".card-name").textContent;
    const nameB = b.querySelector(".card-name").textContent;
    return nameA.localeCompare(nameB);
  });

  const cardContainer = document.getElementById("tasks-display");
  cardContainer.innerHTML = "";
  cardElements.forEach((card) => cardContainer.appendChild(card));
}

// Return the remainingDays as a number integer, display 0 if no valid time found
function getTimeRemaining(remainingTime) {
  const match = remainingTime.match(/(\d+) days remaining/);
  return match ? parseInt(match[1]) : 0;
}

function sortCardsByRemainingTime() {
  const cardElements = Array.from(document.querySelectorAll(".card"));

  cardElements.sort((a, b) => {
    const timeA = getTimeRemaining(
      a.querySelector(".remaining-time").textContent
    );
    const timeB = getTimeRemaining(
      b.querySelector(".remaining-time").textContent
    );

    return timeA - timeB;
  });

  const cardContainer = document.getElementById("tasks-display");
  cardContainer.innerHTML = "";
  cardElements.forEach((card) => cardContainer.appendChild(card));
}

const sortByNameButton = document.getElementById("sortName-btn");
sortByNameButton.addEventListener("click", sortCardsByName);

const sortByTimeButton = document.getElementById("sortTime-btn");
sortByTimeButton.addEventListener("click", sortCardsByRemainingTime);
