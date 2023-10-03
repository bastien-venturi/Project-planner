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
    
    remaining-time.textContent = ` ${promptass} days.`;
});