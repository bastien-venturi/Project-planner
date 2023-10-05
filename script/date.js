import {inputDueDate,createNewTask} from './form-add-list';


    const enterdate = new Date(inputDueDate.value);
    const currenttime = Date.now();
    const userEnteredTime = enterdate.getTime();
    const timeDifference = currenttime - userEnteredTime;
    const daypass = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    
    displayduedate.textContent = ` ${daypass} days.`;




 // Function for the current date
 
 function formatDate(date) {
     const options = {
         year: '2-digit',
         month: '2-digit',
         day: '2-digit',
     };
 
 }
 
 const datecreation = new Date();
 const formattedate = formatDate(datecreation);
 
 displaycreadate.textContent = formattedate;
 
 console.log(displaycreadate);

export {displaycreadate,displayduedate};

/*
const inputDate = document.createElement('input');
inputDate.type = "date";
inputDate.placeholder = 'Enter date';
*/