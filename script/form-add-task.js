
import { createInput } from './createInput.js';
import { createButton } from './createButton.js';


// Récupérer la div cartModal
let cartModal = document.querySelector('#cartModal');
console.log(cartModal);




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
// let buttonAddTask = createButton("Ajouter la tâche", createNewTask);
let buttonAddTask = createButton("Ajouter la tâche");
let buttonDeleteTask = createButton("Annuler");

buttonGroupTask.appendChild(buttonAddTask);
buttonGroupTask.appendChild(buttonDeleteTask);




// Open modal
function openModal(newTabList, allListsTab) {
    inputNameTask.value = '';
    inputDescription.value ='';
    inputDueDate.value = '';

    console.log(newTabList);
    cartModal.style.display = "block";
    cartModal.style.height = "500px";
    cartModal.style.width = "500px";
    cartModal.style.backgroundColor = "white";
    cartModal.style.position = "absolute";
    cartModal.style.top = "40%";
    cartModal.style.left = "20%";
    cartModal.style.zIndex = "9999";

    cartModal.appendChild(inputGroupTask);
    cartModal.appendChild(buttonGroupTask);


    // buttonAddTask.addEventListener('click', function() { createNewTask(listName) }, { once: true });
    buttonAddTask.addEventListener('click', function() { 
        console.log('allListsTab', allListsTab);
        // Créer un objet task
        let newTask = {
            nameList: newTabList.name,
            nameTask: inputNameTask.value,
            descriptionTask: inputDescription.value,
            dueDateTask: inputDueDate.value,
            status: null
        }

        newTabList.taskTab.push(newTask);
        console.log('newTabList', newTabList);

        closeModal();
    }, {once: true});

    buttonDeleteTask.addEventListener('click', closeModal, {once: true})

    
}
// Close modal
function closeModal() {
    cartModal.style.display = "none";
}




export {openModal};






