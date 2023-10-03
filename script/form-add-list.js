// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                             LISTS
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Récupérer la balise <main>
let main = document.querySelector('main');

// Créer un conteneur pour toutes les listes créées
let listContainer = document.createElement('div');
listContainer.classList.add('listContainer');
listContainer.style.display = 'flex';
main.appendChild(listContainer);

// Créer un formulaire pour ajouter une liste
let formList = document.createElement('form');
formList.classList.add('formList');
listContainer.appendChild(formList);

// Créer un conteneur ("bouton") pour ajouter une liste
let addListContainer = document.createElement('div');
// addListContainer.classList.add('addListContainerClass');
let spanPlusSymbolList = document.createElement('span');
spanPlusSymbolList.textContent = '+';
let addListContainerText = document.createTextNode(' Ajouter une liste ');
addListContainer.appendChild(spanPlusSymbolList);
addListContainer.appendChild(addListContainerText);
formList.appendChild(addListContainer);

// Conteneur pour les inputs de création de liste
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
let buttonCancel = createButton('Annuler', cancelListCreation);
buttonGroup.appendChild(buttonAddList);
buttonGroup.appendChild(buttonCancel);

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
    if (spanPlusSymbolList.parentNode === addListContainer) {
        addListContainer.removeChild(spanPlusSymbolList);
        addListContainer.removeChild(addListContainerText);
        addListContainer.appendChild(inputGroup);
        addListContainer.appendChild(buttonGroup);
        formList.appendChild(addListContainer);
        // Supprime l'écouteur d'événement "click" du conteneur pour éviter les doublons
        addListContainer.removeEventListener('click', toggleList);
    } 
    else {
        addListContainer.removeChild(inputGroup);
        addListContainer.removeChild(buttonGroup);
        addListContainer.appendChild(spanPlusSymbolList);
        addListContainer.appendChild(addListContainerText);
        // Ajoute l'écouteur d'événement "click" au conteneur pour restaurer la fonctionnalité
        addListContainer.addEventListener('click', toggleList);
    }
}

function cancelListCreation(e) {
    // e.preventDefault();
    console.log('Supprimer la liste');
    console.log(e);
    // Vider les champs de formulaire
    inputName.value = '';

    toggleList(e);
    // addListContainer.addEventListener('click', toggleList);
}




// index pour identifier les listes
let indexList = 1;



function createNewList(e) {
    e.preventDefault();
    console.log('Créer une nouvelle liste');

    // Nouvelle liste (conteneur)
    let listToAdd = document.createElement('div');
    listToAdd.classList.add('list' + indexList);
    // ---------------------------------------------
    // TODO : Supprimer CSS
    listToAdd.style.padding = '20px';
    listToAdd.style.margin = ' 0 20px';
    listToAdd.style.backgroundColor = 'lightgrey';
    // ---------------------------------------------
    // Créer le titre de la liste
    let listName = document.createElement('h2');
    listName.textContent = inputName.value ? inputName.value : ' ';
    // Créer un bouton pour supprimer la liste
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Supprimer la liste';
    deleteBtn.addEventListener('click', function deleteThisList(e) {
        e.target.parentNode.remove();
    });
    // // Créer un conteneur ("bouton") pour ajouter une tâche
    // let addTaskContainer = document.createElement('div');
    // addTaskContainer.classList.add('addTaskContainerClass');
    // let spanPlusSymbolTask = document.createElement('span');
    // spanPlusSymbolTask.textContent = '+';
    // let addTaskContainerText = document.createTextNode('Ajouter une tâche');
    // addTaskContainer.appendChild(spanPlusSymbolTask);
    // addTaskContainer.appendChild(addTaskContainerText);
    // // Ajouter un évènement au clic sur le bouton "Ajouter une tâche"
    // addTaskContainer.addEventListener('click', toggleTask);

    listToAdd.appendChild(deleteBtn);
    listToAdd.appendChild(listName);
    listToAdd.appendChild(addTaskContainer);


    // Ajouter la liste au conteneur
    listContainer.insertBefore(listToAdd, formList);

    // Vider les champs de formulaire
    inputName.value = '';

    // Incrémenter l'indexList
    indexList++;

    addListContainer.addEventListener('click', toggleList);
}






// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                             TASKS
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// // Créer un conteneur pour toutes les tâches créées
// let taskContainer = document.createElement('div');
// taskContainer.classList.add('taskContainer');

// Créer un formulaire
let formTask = document.createElement('form');
taskContainer.appendChild(formTask);
main.appendChild(taskContainer);

// // Créer un conteneur ("bouton") pour ajouter une tâche
// let addTaskContainer = document.createElement('div');
// addTaskContainer.classList.add('addTaskContainerClass');
// let spanPlusSymbolTask = document.createElement('span');
// spanPlusSymbolTask.textContent = '+';
// let addTaskContainerText = document.createTextNode(' Ajouter une tâche');

// addTaskContainer.appendChild(spanPlusSymbolTask);
// addTaskContainer.appendChild(addListContainerText);

// formTask.appendChild(addTaskContainer);

// // Conteneur pour les inputs
// let inputGroup = document.createElement('div');
// let inputName = createInput('Saisissez le titre de la liste...');

// inputGroup.appendChild(inputName);

// // Conteneur pour les boutons (ajouter une liste - supprimer)
// let buttonGroup = document.createElement('div');
// // ---------------------------------------------
// // TODO : Supprimer CSS
// buttonGroup.style.display = 'flex';
// buttonGroup.style.justifyContent = 'space-between';
// buttonGroup.style.width = ' 200px';
// // ---------------------------------------------
// let buttonAddList = createButton('Ajouter la liste', createNewList);
// let buttonDeleteList = createButton('Annuler', deleteList);


// buttonGroup.appendChild(buttonAddList);
// buttonGroup.appendChild(buttonDeleteList);

// // Ajouter un évènement au clic sur le bouton "Ajouter une liste"
// addListContainer.addEventListener('click', toggleList);

// function createInput(placeholder) {
//     let input = document.createElement('input');
//     input.setAttribute('placeholder', placeholder);
//     return input;
// }

// function createButton(text, clickHandler) {
//     let button = document.createElement('button');
//     button.textContent = text;
//     button.addEventListener('click', clickHandler);
//     return button;
// }

function toggleTask(e) {
    // e.preventDefault();
    console.log('toggleTask');
    console.log(spanPlusSymbolTask);

    if (spanPlusSymbolTask.parentNode === addTaskContainer) {
        addTaskContainer.removeChild(spanPlusSymbolTask);
        addTaskContainer.removeChild(addTaskContainerText);
        // addTaskContainer.appendChild(inputGroup);
        // addTaskContainer.appendChild(buttonGroup);
        // Supprime l'écouteur d'événement "click" du conteneur pour éviter les doublons
        addTaskContainer.removeEventListener('click', toggleTask);
    } 
    // else {
    //     addListContainer.removeChild(inputGroup);
    //     addListContainer.removeChild(buttonGroup);
    //     addListContainer.appendChild(spanPlusSymbolTask);
    //     addListContainer.appendChild(addListContainerText);
    //     // Ajoute l'écouteur d'événement "click" au conteneur pour restaurer la fonctionnalité
    //     addListContainer.addEventListener('click', toggleList);
    // }
}

// function deleteList(e) {
//     // e.preventDefault();
//     console.log('Supprimer la liste');
//     console.log(e);
//     // Vider les champs de formulaire
//     inputName.value = '';

//     addListContainer.addEventListener('click', toggleList);
// }


// // index pour identifier les listes
// let indexList = 1;

// function createNewList(e) {
//     e.preventDefault();
//     console.log('Créer une nouvelle liste');

//     // Nouvelle liste (conteneur)
//     let listToAdd = document.createElement('div');
//     listToAdd.classList.add('list' + indexList);
//     // ---------------------------------------------
//     // TODO : Supprimer CSS
//     listToAdd.style.padding = '20px';
//     listToAdd.style.margin = ' 0 20px';
//     listToAdd.style.backgroundColor = 'lightgrey';
//     // ---------------------------------------------
//     // Créer le titre de la liste
//     let listName = document.createElement('h2');
//     listName.textContent = inputName.value ? inputName.value : ' ';
//     // Créer un bouton pour supprimer la liste
//     let deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Supprimer la liste';
//     deleteBtn.addEventListener('click', function deleteThisList(e) {
//         e.target.parentNode.remove();
//     });
//     // Créer un conteneur ("bouton") pour ajouter une tâche
//     let addTaskContainer = document.createElement('div');
//     addTaskContainer.classList.add('addTaskContainerClass');
//     let spanPlusSymbolTask = document.createElement('span');
//     spanPlusSymbolTask.textContent = '+';
//     let addTaskContainerText = document.createTextNode(' Ajouter une tâche ');
//     // Ajouter un évènement au clic sur le bouton "Ajouter une tâche"
//     addTaskContainer.addEventListener('click', toggleTask);

//     listToAdd.appendChild(deleteBtn);
//     listToAdd.appendChild(listName);
//     listToAdd.appendChild(addTaskContainerText);


//     // Ajouter la liste au conteneur
//     listContainer.insertBefore(listToAdd, form);

//     // Vider les champs de formulaire
//     inputName.value = '';

//     // Incrémenter l'indexList
//     indexList++;

//     addListContainer.addEventListener('click', toggleList);
// }