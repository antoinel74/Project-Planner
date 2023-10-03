const form = () => {
  // ciblage des input du formulaire
  const modale = document.getElementById("modale");
  const names = document.getElementById("name");
  const description = document.getElementById("description");
  const dueDate = document.getElementById("due-date");

  // stockage des informations

  let cards = [];
  let nameValue = "";
  let descriptionValue = "";
  let dueDateValue = "";

  // recupération des input

  names.addEventListener("keyup", (e) => {
    nameValue = e.target.value;
  });

  description.addEventListener("keyup", (e) => {
    descriptionValue = e.target.value;
  });

  dueDate.addEventListener("keyup", (e) => {
    dueDateValue = e.target.value;

    const createCardButton = document.getElementById("create-card-button");
    createCardButton.addEventListener("click", () => {
      const card = new Card(nameValue, descriptionValue, dueDateValue);
      cards.push(card);
    });
  });
};

export { form };
