// const sortSelect = document.getElementById("sort-select");

// let sortBy = sortSelect;

// function sortTasks(card) {
//   if (sortBy === "name") {
//     card.sort((a, b) => a.name.localeCompare(b.name));
//   } else if (sortBy === "remainingTime") {
//     card.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
//   }
//   updateTasksDisplay();
// }

// sortSelect.addEventListener("change", (e) => {
//   const sectionId = document.querySelector('#sort-select');
//   const card = document.querySelectorAll('.card')
//   let remaining = document.querySelector('.remaining-time')
//   let aChild = card[0].children[0].textContent;
//   let bChild = remaining.textContent;
//   console.log(bChild);
//   e.target.value === 'name' ? sectionId.sort((aChild, bChild)=> aChild.localeCompare(bChild)) : false;
  
// });
// sortTasks.addEventListener("change", sortSelect);
 




// cards = [
//   {
//     name : "sdjef" , 
//     description : "dzfhhjezf" ,
//     dueDate : "28/10/2023"
//   },{
//     name : "dddd" , 
//     description : "ffffff" ,
//     dueDate : "21/10/2023"
//   },{
//     name : "shdhdeh" , 
//     description : "sdheh" ,
//     dueDate : "11/10/2023"
//   }
// ];
         
// console.log(cards);



// createCard(nameValue, descriptionValue, dueDateValue);



// const sortSelect = document.querySelector("#sort-select");  

// function sortTasks(cards) {
  
//   let sortBy = this.value;
//   if (sortBy === "name") {
//     cards.sort((a, b) => a.name.localeCompare(b.name));
//   } else if (sortBy === "remainingTime") {
//     cards.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
//   }
//   console.log(cards);

// }


// sortSelect.addEventListener("change", sortTasks) ;
    

// function updateTasksDisplay(cards) {
 
// };

// // const sortSelect = document.querySelector("#sort-select"); 
// // const cardArray = []; 

// // function sortTasks() {
// //   const sortBy = sortSelect.value; 

// //   if (sortBy === "name") {
// //     cardArray.sort((a, b) => a.name.localeCompare(b.name));
// //   } else if (sortBy === "remainingTime") {
// //     cardArray.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
// //   }
 
// //   updateTasksDisplay(cardArray);
// // }

// // sortSelect.addEventListener("change", sortTasks); 

// // function updateTasksDisplay(cardArray) {
  
// // }


console.table(cards);


let sortOption = document.querySelector("#sort-select");

sortOption.addEventListener("change",function(){
  console.log(sortOption.value);

  let sortBy = sortOption.value;
    if (sortBy === "name") {
      cards.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "remainingTime") {
      cards.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
    }
    console.table(cards);
  //  updateTasksDisplay(cards);
}); 

 






// const sortSelect = document.querySelector("#sort-option"); 

// function sortTasks() {
//   console.log(sortSelect.value);
//   let sortBy = sortSelect.value;
//   if (sortBy === "name") {
//     cardArray.sort((a, b) => a.name.localeCompare(b.name));
//   } else if (sortBy === "remainingTime") {
//     cardArray.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
//   }
 
//   updateTasksDisplay(cardArray);
// }

// sortSelect.addEventListener("change",sortTasks)



// function updateTasksDisplay(cardArray) {
 
// }