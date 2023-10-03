const form = () => {
  // ciblage des input du formulaire
  const modale = document.getElementById("modale");
  const names = document.getElementById("name");
  const description = document.getElementById("description");
  const dueDate = document.getElementById("due-date");

  // stockage des informations

  let nameValue;
  let descriptionValue;
  let dueDateValue;

  // recupération des input

  names.addEventListener("keyup", (e) => {
    nameValue = e.target.value;
    return nameValue;
  });

  description.addEventListener("keyup", (e) => {
    descriptionValue = e.target.value;
    return descriptionValue;
  });

  dueDate.addEventListener("keyup", (e) => {
    dueDateValue = e.target.value;
    return dueDateValue;
  });
};

export { form };
