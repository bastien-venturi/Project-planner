// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //                             LISTS
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import { createInput } from "./createInput.js";
import { createButton } from "./createButton.js";
import { openModal } from "./form-add-task.js";

// // Créer un tableau de listes
let allListsTab = [];

// function createListTab(newListName) {
//     return newListName = [];
// }

// Récupérer la balise <main>
let main = document.querySelector("main");

// Créer un conteneur pour toutes les listes créées
let listContainer = document.createElement("div");
listContainer.classList.add(
  "listContainer",
  "flex",
  "flex-grow",
  "px-10",
  "mt-4",
  "space-x-6",
  "overflow-auto"
); // Ajout de classe pour le CSS (V)
main.appendChild(listContainer);

// Créer un formulaire pour ajouter une liste
let formList = document.createElement("form");
formList.classList.add("formList");
listContainer.appendChild(formList);

// Créer un conteneur ("bouton") pour ajouter une liste
let addListContainer = document.createElement("div");
addListContainer.classList.add("addListContainer");
let spanPlusSymbolList = document.createElement("span");
spanPlusSymbolList.textContent = "+";
let addListContainerText = document.createTextNode(" Ajouter une liste ");
addListContainer.appendChild(spanPlusSymbolList);
addListContainer.appendChild(addListContainerText);
formList.appendChild(addListContainer);

// Conteneur pour les inputs de création de liste
let inputName = createInput("Saisissez le titre de la liste...");

// Conteneur pour les boutons (ajouter une liste - supprimer)
let buttonGroup = document.createElement("div");
// ---------------------------------------------
// TODO : Supprimer CSS
// buttonGroup.style.display = "flex";
// buttonGroup.style.justifyContent = "space-between";
// buttonGroup.style.width = " 200px";
// ---------------------------------------------
let buttonAddList = createButton("Ajouter la liste", createNewList);
let buttonCancel = createButton("Annuler", cancelListCreation);
buttonGroup.appendChild(buttonAddList);
buttonGroup.appendChild(buttonCancel);

// Ajouter un évènement au clic sur le bouton "Ajouter une liste"
formList.addEventListener("click", toggleList, { once: true });

function toggleList(e) {
  // e.preventDefault();
  if (spanPlusSymbolList.parentNode === addListContainer) {
    addListContainer.removeChild(spanPlusSymbolList);
    addListContainer.removeChild(addListContainerText);
    addListContainer.appendChild(inputName);
    addListContainer.appendChild(buttonGroup);
    formList.appendChild(addListContainer);
    // Supprime l'écouteur d'événement "click" du conteneur pour éviter les doublons
    formList.removeEventListener("click", toggleList, { once: true });
  } else {
    addListContainer.removeChild(inputName);
    addListContainer.removeChild(buttonGroup);
    addListContainer.appendChild(spanPlusSymbolList);
    addListContainer.appendChild(addListContainerText);
    // Ajoute l'écouteur d'événement "click" au conteneur pour restaurer la fonctionnalité
    formList.addEventListener("click", toggleList, { once: true });
  }
}

function cancelListCreation(e) {
  // e.preventDefault();
  // console.log("Supprimer la liste");

  // Vider les champs de formulaire
  inputName.value = "";

  formList.addEventListener("click", toggleList, { once: true });
}

// index pour identifier les listes
let indexList = 1;

function createNewList(e) {
  e.preventDefault();
  // console.log("Créer une nouvelle liste");
  // console.log(e);

  // Nouvelle liste (conteneur)
  let listToAdd = document.createElement("div");
  listToAdd.classList.add("list" + indexList);
  // ---------------------------------------------
  // TODO : Supprimer CSS
  //   listToAdd.style.padding = "20px";
  //   listToAdd.style.margin = " 0 20px";
  //   listToAdd.style.backgroundColor = "lightgrey";
  // ---------------------------------------------
  // Créer le titre de la liste
  let titleDiv = document.createElement("div"); // Ajout d'une Div qui contient le Titre (V)
  titleDiv.classList.add(
    "flex",
    "items-center",
    "flex-shrink-0",
    "h-10",
    "px-2",
    "justify-center",
    "bg-white",
    "rounded-lg"
  );
  let listName = document.createElement("h2"); // Modification en Span (V)
  listName.classList.add(
    "block",
    "text-sm",
    "font-semibold",
    "list" + indexList
  ); // ajout du CSS (V)
  listName.textContent = inputName.value ? inputName.value : " ";
  // listTab.push(listName);
  let newTabList = {
    name: inputName.value,
    taskTab: [],
  };
  allListsTab.push(newTabList);




    // Récupérer le select
    let selectList = document.querySelector('#dropdown1');

    // Créer l'option
    let option = document.createElement('option');
    option.setAttribute('value', inputName.value);
    option.textContent = inputName.value;

    // selectList.appendChild(option.lastChild);
    selectList.appendChild(option);

    selectList.addEventListener('change', (e) => {
        // const selectedValue = selectList.value;
        // console.log('newTabList : ', newTabList);
        // console.log('e.target.value : ', e.target.value);

        let listContainer = document.querySelectorAll('.listContainer > div');
        console.log('listContainer : ', listContainer);
        let listContainerFirstChild = listContainer.children[1];
        console.log('listContainerFirstChild : ', listContainerFirstChild);

        // for (let option of selectList) {

        //     switch(option.value) {
        //         case 'allLists': selectedValue.style.display.block;
        //         break;
        //         case 'inputName.value': selectedValue.style.display.block;
        //         break;
        //         case '!inputName.value': selectedValue.style.display.none;
        //     }
        // }

    })

  
  console.log("newTabList", newTabList);
  console.log("allListsTab", allListsTab);
  // Créer un bouton pour supprimer la liste
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Supprimer la liste";
  deleteBtn.addEventListener("click", function deleteThisList(e) {
    e.target.parentNode.remove();
    let indexListToDelete = parseInt(
      String(e.target.parentNode.className).slice(
        4,
        e.target.parentNode.className.length
      ) - 1
    );
    console.log("indexListToDelete : ", indexListToDelete);
    console.log("allListsTab : ", allListsTab);
    allListsTab.splice(indexListToDelete, 1);
    console.log("allListsTab : ", allListsTab);
  });
  // Créer un formulaire pour ajouter des tâches
  let formTask = document.createElement("form");
  formTask.classList.add("formTask");
  // Créer un conteneur ("bouton") pour ajouter une tâche
  let addTaskContainer = document.createElement("div");
  addTaskContainer.classList.add("addTaskContainer");
  let spanPlusSymbolTask = document.createElement("span");
  spanPlusSymbolTask.textContent = "+";
  let addTaskContainerText = document.createTextNode("Ajouter une tâche");
  addTaskContainer.appendChild(spanPlusSymbolTask);
  addTaskContainer.appendChild(addTaskContainerText);
  formTask.appendChild(addTaskContainer);
  // Ajouter un évènement au clic sur le bouton "Ajouter une tâche"
  // formTask.addEventListener("click", function () {
  //     toggleTask(spanPlusSymbolTask, addTaskContainer, addTaskContainerText, formTask);
  // }, { once: true });
  // formTask.addEventListener("click", function() { console.log(listName.textContent) });
  formTask.addEventListener("click", function (e) {
    openModal(newTabList, allListsTab, e), { once: true };
  });

  // Conteneur avec Toutes les tâches
  let containerAllTasks = document.createElement("div");
  containerAllTasks.classList.add(
    "containerAllTasks",
    "container",
    "flex",
    "flex-col",
    "pb-2",
    "overflow-auto",
    "w-72"
  );

  listToAdd.appendChild(deleteBtn);
  listToAdd.appendChild(titleDiv);
  titleDiv.appendChild(listName);
  listToAdd.appendChild(containerAllTasks);
  containerAllTasks.appendChild(formTask);

  // Ajouter la liste au conteneur
  listContainer.insertBefore(listToAdd, formList);

  // Vider les champs de formulaire
  inputName.value = "";

  // Incrémenter l'indexList
  indexList++;

  formList.addEventListener("click", toggleList, { once: true });
}
