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





cards = [
  {
    name : "sdjef" , 
    description : "dzfhhjezf" ,
    dueDate : "28/10/2023"
  },{
    name : "dddd" , 
    description : "ffffff" ,
    dueDate : "21/10/2023"
  },{
    name : "shdhdeh" , 
    description : "sdheh" ,
    dueDate : "11/10/2023"
  }
];
         
console.log(cards);



createCard(nameValue, descriptionValue, dueDateValue);



const sortSelect = document.querySelector("#sort-select");  

function sortTasks(cards) {
  
  let sortBy = this.value;
  if (sortBy === "name") {
    cards.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "remainingTime") {
    cards.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  }
  console.log(cards);

}


sortSelect.addEventListener("change", sortTasks) ;
    

function updateTasksDisplay(cards) {
 
};

// const sortSelect = document.querySelector("#sort-select"); 
// const cardArray = []; 

// function sortTasks() {
//   const sortBy = sortSelect.value; 

//   if (sortBy === "name") {
//     cardArray.sort((a, b) => a.name.localeCompare(b.name));
//   } else if (sortBy === "remainingTime") {
//     cardArray.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
//   }
 
//   updateTasksDisplay(cardArray);
// }

// sortSelect.addEventListener("change", sortTasks); 

// function updateTasksDisplay(cardArray) {
  
// }


