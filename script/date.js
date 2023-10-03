const inputDate = document.createElement('input');
inputDate.type = "date";
inputDate.placeholder = 'Enter date';

const calculatebutton = document.createElement('button');
calculatebutton.textContent = 'GO!';
calculatebutton.addEventListener('click', () => {
    const userEnteredDate = new Date(inputDate.value);
    const currenttime = Date.now();
    const userEnteredTime = userEnteredDate.getTime();
    const timeDifferencePrompt = currenttime - userEnteredTime;
    const promptass = Math.floor(timeDifferencePrompt / (24 * 60 * 60 * 1000));
    
    // remaining-time.textContent = ` ${promptass} days.`;
});



/*
    <label for="dateInput">Entrez une date :</label>
    <input type="date" id="dateInput">
    <button onclick="calculateRemainingDays()">Calculer</button>
    <p id="result"></p>




function calculateRemainingDays() {
    const dateInput = document.getElementById('dateInput').value;
    const currentDate = new Date();
    const selectedDate = new Date(dateInput);
    const timeDifference = selectedDate - currentDate;
    const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    if (remainingDays > 0) {
        document.getElementById('result').textContent = `Il reste ${remainingDays} jours jusqu'à la date sélectionnée.`;
    } else if (remainingDays === 0) {
        document.getElementById('result').textContent = `Aujourd'hui est la date sélectionnée.`;
    } else {
        document.getElementById('result').textContent = `La date sélectionnée est passée.`;
    }
}





  // Function for the current date
  function date() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    return `${day}/${month}/${year}`;
}
*/