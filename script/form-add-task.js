// before

import { createInput } from "./createInput.js";
import { createButton } from "./createButton.js";

// Récupérer la div cartModal
let cartModal = document.querySelector('#cartModal');
// console.log(cartModal);




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
// let buttonAddTask = createButton("Ajouter la tâche", createNewTask);
let buttonAddTask = createButton("Ajouter la tâche");
let buttonDeleteTask = createButton("Annuler");

buttonGroupTask.appendChild(buttonAddTask);
buttonGroupTask.appendChild(buttonDeleteTask);




// Open modal
function openModal(newTabList, allListsTab, eventSend) {

    // console.log(eventSend.target.parentNode);
    // console.log(eventSend.target.parentNode.parentNode);
    inputNameTask.value = '';
    inputDescription.value = '';
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
    buttonAddTask.addEventListener('click', function (e) {
        e.preventDefault();
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
        console.log("newTabList", newTabList);

        // Créer une nouvelle div pour la tâche
        let containerNewTask = document.createElement("div");
        containerNewTask.classList.add(
            "task",
            "draggable",
            "relative",
            "flex",
            "flex-col",
            "items-start",
            "p-4",
            "mt-3",
            "bg-white",
            "rounded-lg",
            "cursor-pointer",
            "bg-opacity-90",
            "group",
            "hover:bg-opacity-100"
        );
        containerNewTask.setAttribute("draggable", "true");

        // Contenu de la div (nom, description, date d'échéance, bouton pour supprimer la tâche)
        let nameTag = document.createElement("div");
        nameTag.classList.add(
            "flex",
            "items-center",
            "h-6",
            "px-3",
            "text-xs",
            "font-semibold",
            "bg-pink-100",
            "rounded-full"
        );
        let descriptionTag = document.createElement("h4");
        descriptionTag.classList.add("mt-3", "text-sm", "font-medium");
        let dueDateTag = document.createElement("div");
        dueDateTag.classList.add(
            "flex",
            "items-center",
            "w-full",
            "mt-3",
            "text-xs",
            "font-medium",
            "text-gray-400"
        );
        let displayCreaDate = document.createElement("div");
        let displayCreaDateSpan = document.createElement("span");
        displayCreaDateSpan.classList.add("ml-1", "leading-none");
        let displayDueDate = document.createElement("div");
        displayDueDate.classList.add("date", "ml-4");
        let displayDueDateSpan = document.createElement("span");
        displayDueDateSpan.classList.add("ml-1", "leading-none");



        let deleteTaskBtn = document.createElement("button");
        deleteTaskBtn.classList.add(
            "absolute",
            "top-0",
            "right-0",
            "flex",
            "items-center",
            "justify-center",
            "hidden",
            "w-5",
            "h-5",
            "mt-3",
            "mr-2",
            "text-gray-500",
            "rounded",
            "hover:bg-gray-200",
            "hover:text-gray-700",
            "group-hover:flex"
        );
        nameTag.textContent = inputNameTask.value;
        descriptionTag.textContent = inputDescription.value;
        //   dueDateTag.textContent = inputDueDate.value;
        displayCreaDateSpan.textContent = new Date().toLocaleDateString();
        //   displayDueDate.textContent = "Time Temaining";
        deleteTaskBtn.textContent = "x";

        // Calcul du nombre de jours restants 
        const DueDate = new Date(inputDueDate.value);
        let daysRemaining = null;
        let secondsRemaining = null;
        let timeDifference = null;
        let currentDate = new Date();

        if (!isNaN(DueDate.getTime())) {

            function updateCurrentDate() {
                currentDate = new Date();
                // let timeDifference = DueDate - currentDate;
                timeDifference = DueDate - currentDate;
                // Calculez les jours et les heures restants
                daysRemaining = Math.floor(timeDifference / (24 * 60 * 60 * 1000) + 1);
                secondsRemaining = Math.floor(timeDifference / (1000));
                // console.log('daysRemaining : ', daysRemaining);
                // console.log('secondsRemaining : ', secondsRemaining);
                // Affichez le résultat
                if (daysRemaining > 0) {
                    displayDueDateSpan.textContent = `${daysRemaining} days`;
                    // console.log(`daysRemaining : ${daysRemaining}`);
                    // console.log('currentDate : ', currentDate);
                    // console.log('timeDifference : ', timeDifference);
                } else {
                    displayDueDateSpan.textContent = `Warning!`;
                    // console.log(`Warning!`);
                }
            }

            setInterval(updateCurrentDate, 1000);


        };

        deleteTaskBtn.addEventListener("click", function (e) {
            e.preventDefault();
            console.log('allListsTab', allListsTab);
            // Créer un objet task
            let newTask = {
                nameList: newTabList.name,
                nameTask: inputNameTask.value,
                descriptionTask: inputDescription.value,
                dueDateTask: inputDueDate.value,
                status: null
            }
            console.log('inputDueDate.value : ', inputDueDate.value);

            e.target.parentNode.remove();
        });

        containerNewTask.appendChild(nameTag);
        containerNewTask.appendChild(descriptionTag);
        containerNewTask.appendChild(dueDateTag);
        dueDateTag.appendChild(displayCreaDate);
        dueDateTag.appendChild(displayDueDate);
        containerNewTask.appendChild(deleteTaskBtn);
        displayCreaDate.appendChild(displayCreaDateSpan);
        displayDueDate.appendChild(displayDueDateSpan);


        let containerAllTasks = eventSend.target.parentNode.parentNode;
        let form = eventSend.target.parentNode;
        // console.log('containerAllTasks : ', containerAllTasks);
        // console.log('form : ', form);
        containerAllTasks.insertBefore(containerNewTask, form);


        closeModal();
    }, { once: true });

    buttonDeleteTask.addEventListener('click', closeModal, { once: true })

}
// Close modal
function closeModal() {
    cartModal.style.display = "none";
}


export { openModal };







