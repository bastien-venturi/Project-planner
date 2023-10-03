
// Récupérer la balise <main>
let main = document.querySelector('main');

// Créer un conteneur pour toutes les listes crées
let listContainer = document.createElement('div');
listContainer.classList.add('listContainer');
listContainer.style.display = 'flex';
// Créer un formulaire
let form = document.createElement('form');
listContainer.appendChild(form);
main.appendChild(listContainer);

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

inputGroup.appendChild(inputName);

// Conteneur pour les boutons (ajouter une liste - supprimer)
let buttonGroup = document.createElement('div');
// ---------------------------------------------
// TODO : Supprimer CSS
buttonGroup.style.display = 'flex';
buttonGroup.style.justifyContent = 'space-between';
buttonGroup.style.width = ' 200px';
// ---------------------------------------------
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

    // Vider les champs de formulaire
    inputName.value = '';

    addListContainer.addEventListener('click', toggleList);
}


// index pour identifier les listes
let indexList = 1;

function createNewList(e) {
    e.preventDefault();
    console.log('Créer une nouvelle liste');

    // Nouvelle liste
    let listToAdd = document.createElement('div');
    // ---------------------------------------------
    // TODO : Supprimer CSS
    listToAdd.style.padding = '20px';
    listToAdd.style.margin = ' 0 20px';
    listToAdd.style.backgroundColor = 'lightgrey';
    // ---------------------------------------------
    listToAdd.classList.add(indexList);
    let listName = document.createElement('h2');
    listName.textContent = inputName.value ? inputName.value : '/';
    listToAdd.appendChild(listName);


    // Ajouter la liste au conteneur
    listContainer.insertBefore(listToAdd, form);

    // Vider les champs de formulaire
    inputName.value = '';

    // Incrémenter l'indexList
    indexList++;

    addListContainer.addEventListener('click', toggleList);
}