
// Récupérer la balise <main>
let main = document.querySelector('main');

// Créer un formulaire
let form = document.createElement('form');
main.appendChild(form);

// Créer un conteneur ("bouton") pour ajouter une liste
let addListContainer = document.createElement('div');
addListContainer.classList.add('addListContainerClass');
let spanPlusSymbol = document.createElement('span');
spanPlusSymbol.textContent = '+';
let addListContainerText = document.createTextNode(' Ajouter une liste ');

addListContainer.appendChild(spanPlusSymbol);
addListContainer.appendChild(addListContainerText);

form.appendChild(addListContainer);

// Conteneur pour les inputs
let inputGroup = document.createElement('div');
let inputName = createInput('Saisissez le titre de la liste...');
let inputDescription = createInput('Saisissez la description...');
let inputDueDate = createInput('Saisissez la date d\'échéance...');

inputGroup.appendChild(inputName);
inputGroup.appendChild(inputDescription);
inputGroup.appendChild(inputDueDate);

// Conteneur pour les boutons (ajouter une liste - supprimer)
let buttonGroup = document.createElement('div');
let buttonAddList = createButton('Ajouter la liste', createNewList);
let buttonDeleteList = createButton('Annuler', deleteList);


buttonGroup.appendChild(buttonAddList);
buttonGroup.appendChild(buttonDeleteList);

// Ajouter un évènement au clic sur le bouton "Ajouter une liste"
addListContainer.addEventListener('click', toggleList);

function createInput(placeholder) {
    let input = document.createElement('input');
    input.setAttribute('placeholder', placeholder);
    return input;
}

function createButton(text, clickHandler) {
    let button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    return button;
}

function toggleList(e) {
    // e.preventDefault();
    if (spanPlusSymbol.parentNode === addListContainer) {
        addListContainer.removeChild(spanPlusSymbol);
        addListContainer.removeChild(addListContainerText);
        addListContainer.appendChild(inputGroup);
        addListContainer.appendChild(buttonGroup);
        // Supprime l'écouteur d'événement "click" du conteneur pour éviter les doublons
        addListContainer.removeEventListener('click', toggleList);
    } 
    else {
        addListContainer.removeChild(inputGroup);
        addListContainer.removeChild(buttonGroup);
        addListContainer.appendChild(spanPlusSymbol);
        addListContainer.appendChild(addListContainerText);
        // Ajoute l'écouteur d'événement "click" au conteneur pour restaurer la fonctionnalité
        addListContainer.addEventListener('click', toggleList);
    }
}

function deleteList(e) {
    // e.preventDefault();
    console.log('Supprimer la liste');

    addListContainer.addEventListener('click', toggleList);
}

function createNewList(e) {
    // e.preventDefault();
    console.log('Créer une nouvelle liste');
    // console.log(e);
    console.log(inputName.value);
    console.log(inputDescription.value);
    console.log(inputDueDate.value);

    inputName.value = '';
    inputDescription.value = '';
    inputDueDate.value = '';

    addListContainer.addEventListener('click', toggleList);
}