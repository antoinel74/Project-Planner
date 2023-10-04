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
