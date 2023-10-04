// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                             TASKS
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import { createInput } from "./createInput.js";
import { createButton } from "./createButton.js";
import { toggleTaskListener } from "./toggleTaskListener.js";

// Conteneur pour les inputs
let inputGroupTask = document.createElement("div");

let inputNameTask = createInput("Saisissez le titre de la tâche...");
let inputDescription = createInput("Saisissez la description...");
let inputDueDate = document.createElement("input");
inputDueDate.type = "date";
inputDueDate.placeholder = "Saisissez la date d'échéance...";

inputGroupTask.appendChild(inputNameTask);
inputGroupTask.appendChild(inputDescription);
inputGroupTask.appendChild(inputDueDate);

// Conteneur pour les boutons (ajouter une liste - supprimer)
let buttonGroupTask = document.createElement("div");
// ---------------------------------------------
// TODO : Supprimer CSS
buttonGroupTask.style.display = "flex";
buttonGroupTask.style.justifyContent = "space-between";
buttonGroupTask.style.width = " 200px";
// ---------------------------------------------
let buttonAddTask = createButton("Ajouter la liste", createNewTask);
let buttonDeleteTask = createButton("Annuler", deleteTask);

buttonGroupTask.appendChild(buttonAddTask);
buttonGroupTask.appendChild(buttonDeleteTask);

function toggleTask(
  spanPlusSymbolTask,
  addTaskContainer,
  addTaskContainerText,
  formTask
) {
  // e.preventDefault();
  console.log("formTask", formTask);
  // console.log('toggleTask');
  console.log(spanPlusSymbolTask);
  console.log(addTaskContainer);

  if (spanPlusSymbolTask.parentNode === addTaskContainer) {
    console.log("yes");
    addTaskContainer.removeChild(spanPlusSymbolTask);
    addTaskContainer.removeChild(addTaskContainerText);
    addTaskContainer.appendChild(inputGroupTask);
    addTaskContainer.appendChild(buttonGroupTask);
    // Supprime l'écouteur d'événement "click" du conteneur pour éviter les doublons
    formTask.removeEventListener("click", toggleTaskListener);
    // formTask.removeEventListener('click', function() {
    //     toggleTask(spanPlusSymbolTask, addTaskContainer, addTaskContainerText, formTask);
    // });
  } else {
    console.log("no");
    addTaskContainer.removeChild(inputGroupTask);
    addTaskContainer.removeChild(buttonGroupTask);
    addTaskContainer.appendChild(spanPlusSymbolTask);
    addTaskContainer.appendChild(addTaskContainerText);
    //  // Ajoute l'écouteur d'événement "click" au conteneur pour restaurer la fonctionnalité
    //  addListContainer.addEventListener('click', toggleList);
    // formTask.addEventListener('click', function() {
    //     toggleTask(spanPlusSymbolTask, addTaskContainer, addTaskContainerText, formTask);
    // });
    formTask.addEventListener("click", toggleTaskListener);
  }
}

function deleteTask(e) {
  e.preventDefault();
  console.log("Supprimer la tâche");
  //     console.log(e);
  //     // Vider les champs de formulaire
  //     inputNameTask.value = '';
  //     inputDescription.value = '';
  //     inputDueDate.value = '';

  //     addListContainer.addEventListener('click', toggleList);
}

// index pour identifier les listes
let indexTask = 1;

function createNewTask(e) {
  e.preventDefault();
  console.log("Créer une nouvelle tâche");

  console.log("inputNameTask.value", inputNameTask.value);
  console.log("inputDescription.value", inputDescription.value);
  console.log("inputDueDate.value", inputDueDate.value);

  // Nouvelle tâche (conteneur)
  let taskToAdd = document.createElement("div");
  taskToAdd.classList.add("task" + indexTask);
  // ---------------------------------------------
  // TODO : Supprimer CSS
  taskToAdd.style.padding = "20px";
  taskToAdd.style.margin = " 0 20px";
  taskToAdd.style.backgroundColor = "lightgreen";
  // ---------------------------------------------
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
}

export { inputDueDate, toggleTask };
