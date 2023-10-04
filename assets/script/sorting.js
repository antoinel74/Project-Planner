// const sortSelect = document.querySelectorAll(".sort-option");


// function sortTasks(card) {
//   let sortBy = sortSelect.value;
//   if (sortBy === "name") {
//     card.sort((a, b) => a.name.localeCompare(b.name));
//   } else if (sortBy === "remainingTime") {
//     card.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
//   }
//   // updateTasksDisplay();
// }


// sortSelect.addEventListener("change", sortTasks);
// // sortTasks.addEventListener("change", sortSelect);








const sortSelect = document.querySelectorAll("#sort-select");  

function sortTasks(cardArray) {
  // console.log(sortSelect.value);
  let sortBy = this.value;
  if (sortBy === "name") {
    cardArray.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "remainingTime") {
    cardArray.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  }
 
  updateTasksDisplay(cardArray);
}


sortSelect.forEach(option => {
  option.addEventListener("change", function () {
    
    const cardArray = Array.from(sortSelect);
    sortTasks.call(this, cardArray);
    
  });
});



function updateTasksDisplay(cardArray) {
 
};
