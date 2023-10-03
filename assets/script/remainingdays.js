let inputDate = document.querySelector('input[type="date"]');
inputDate = new Date("11/23/2023");
let todayDate = new Date();

console.log(inputDate); //TEST
console.log(todayDate); // TEST

let differenceTime = inputDate.getTime() - todayDate.getTime();
let differenceDays = Math.floor(differenceTime / (1000 * 3600 * 24));

console.log(differenceDays + " days remaining"); // TEST OK
