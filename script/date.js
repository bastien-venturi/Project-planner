import {inputDueDate} from './form-add-task';

console.log(inputDueDate.value);

// Convertissez la chaîne de caractères en objet Date
const inputDueDate = parseDate(inputDueDate.value);

// Vérifiez si la date est valide
if (!isNaN(inputDueDate.getTime())) {
  const currentDate = new Date();
  const timeDifference = inputDueDate - currentDate;

  // Calculez les jours et les heures restants
  const daysRemaining = Math.floor(timeDifference / (24 * 60 * 60 * 1000)+1);
  

  // Affichez le résultat
  if (daysRemaining > 0) {
    console.log(`${daysRemaining}`);
  } else {
    console.log(`Warning!`);
  }
};

taskTab[0].dueDateTask
[0].taskTab[0].dueDateTask

/* Fonction pour convertir une chaîne de caractères en objet Date
function parseDate(input) {
    const parts = input.split("-");
    if (parts.length === 3) {
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10) - 1;
            const year = parseInt(parts[2], 10);
            return new Date(year, month, day);
    }
}
*/







console.log(displayduedate);
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
 
 
 
 console.log(displayCreaDate);
 console.log(displayDuesDate);
 

//export {displaycreadate,displayduedate};

/*
const inputDate = document.createElement('input');
inputDate.type = "date";
inputDate.placeholder = 'Enter date';
*/