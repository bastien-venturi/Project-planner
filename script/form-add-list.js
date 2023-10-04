// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                             LISTS
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


import {createInput} from './createInput.js';
import {createButton} from './createButton.js';
import {toggleTask} from './form-add-task.js';

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
addListContainer.classList.add('addListContainer');
let spanPlusSymbolList = document.createElement('span');
spanPlusSymbolList.textContent = '+';
let addListContainerText = document.createTextNode(' Ajouter une liste ');
addListContainer.appendChild(spanPlusSymbolList);
addListContainer.appendChild(addListContainerText);
formList.appendChild(addListContainer);

// Conteneur pour les inputs de création de liste
let inputName = createInput('Saisissez le titre de la liste...');


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
formList.addEventListener('click', toggleList);




function toggleList(e) {
    // e.preventDefault();
    if (spanPlusSymbolList.parentNode === addListContainer) {
        addListContainer.removeChild(spanPlusSymbolList);
        addListContainer.removeChild(addListContainerText);
        addListContainer.appendChild(inputName);
        addListContainer.appendChild(buttonGroup);
        formList.appendChild(addListContainer);
        // Supprime l'écouteur d'événement "click" du conteneur pour éviter les doublons
        formList.removeEventListener('click', toggleList);
    } 
    else {
        addListContainer.removeChild(inputName);
        addListContainer.removeChild(buttonGroup);
        addListContainer.appendChild(spanPlusSymbolList);
        addListContainer.appendChild(addListContainerText);
        // Ajoute l'écouteur d'événement "click" au conteneur pour restaurer la fonctionnalité
        formList.addEventListener('click', toggleList);
    }
}

function cancelListCreation(e) {
    // e.preventDefault();
    console.log('Supprimer la liste');

    // Vider les champs de formulaire
    inputName.value = '';

    formList.addEventListener('click', toggleList);
}





// index pour identifier les listes
let indexList = 1;

function createNewList(e) {
    e.preventDefault();
    console.log('Créer une nouvelle liste');
    console.log(e);

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
        formList.addEventListener('click', toggleList);
    });
    // Créer un formulaire pour ajouter des tâches
    let formTask = document.createElement('form');
    formTask.classList.add('formTask');
    // Créer un conteneur ("bouton") pour ajouter une tâche
    let addTaskContainer = document.createElement('div');
    addTaskContainer.classList.add('addTaskContainer');
    let spanPlusSymbolTask = document.createElement('span');
    spanPlusSymbolTask.textContent = '+';
    let addTaskContainerText = document.createTextNode('Ajouter une tâche');
    addTaskContainer.appendChild(spanPlusSymbolTask);
    addTaskContainer.appendChild(addTaskContainerText);
    formTask.appendChild(addTaskContainer);
    // Ajouter un évènement au clic sur le bouton "Ajouter une tâche"
    formTask.addEventListener('click', function() {
        toggleTask(spanPlusSymbolTask, addTaskContainer, addTaskContainerText, formTask);
    }, { once: true });
    // function toggleTaskListener(e) {
    //     toggleTask(spanPlusSymbolTask, addTaskContainer, addTaskContainerText, formTask);
    // }
    
    // // Ajoutez un événement sur formTask en utilisant toggleTaskListener
    // formTask.addEventListener('click', toggleTaskListener);

    listToAdd.appendChild(deleteBtn);
    listToAdd.appendChild(listName);
    listToAdd.appendChild(formTask);


    // Ajouter la liste au conteneur
    listContainer.insertBefore(listToAdd, formList);

    // Vider les champs de formulaire
    inputName.value = '';

    // Incrémenter l'indexList
    indexList++;

    formList.addEventListener('click', toggleList);
}



