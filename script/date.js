//import {inputDueDate} from './form-add-task';
const inputDueDate = new Date('2023-10-30');


const enterdate = new Date(inputDueDate.value);
const currentime = Date.now();
const userentertime = enterdate.getTime();
const timeDifference = currentime - userentertime;
const displayduedate = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

console.log(displayduedate)
 // Function for the current date
 
 function formatDate(date) {
     const options = {
         year: '2-digit',
         month: '2-digit',
         day: '2-digit',
     };
 
 }
 
 const datecreation = new Date();
 const displaycreadate = formatDate(datecreation);
 
 
 console.log(displayduedate);
 console.log(displaycreadate);
 

//export {displaycreadate,displayduedate};

/*
const inputDate = document.createElement('input');
inputDate.type = "date";
inputDate.placeholder = 'Enter date';
*/