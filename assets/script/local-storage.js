// Create data
function saveCards(cardData) {
  const existingCards = JSON.parse(localStorage.getItem("cards")) || [];
  existingCards.push(cardData);
  localStorage.setItem("cards", JSON.stringify(existingCards));
}

// Retrieve the data
function getCards() {
  return JSON.parse(localStorage.getItem("cards")) || [];
}

// Removing all the cards
function removeAllCardElements() {
  const cardContainer = document.getElementById("tasks-display");
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
}

// Clear the locale storage
document.addEventListener("DOMContentLoaded", () => {
  const clearLocalStorageButton = document.getElementById(
    "clear-local-storage"
  );
  if (clearLocalStorageButton) {
    clearLocalStorageButton.addEventListener("click", () => {
      localStorage.removeItem("cards");
      removeAllCardElements();
    });
  }
});
