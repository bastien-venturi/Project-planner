// // Toggle dropdown by its ID
// function toggleDropdown(dropdownId) {
//   const dropdown = document.getElementById(dropdownId);
//   if (dropdown.style.display === "block") {
//       dropdown.style.display = "none";
//   } else {
//       dropdown.style.display = "block";
//   }
// }

// // Close when the user clicks outside it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropdown')) {
//       const dropdowns = document.getElementsByClassName("dropdown");
//       for (let i = 0; i < dropdowns.length; i++) {
//           const openDropdown = dropdowns[i];
//           if (openDropdown.style.display === "block") {
//               openDropdown.style.display = "none";
//           }
//       }
//   }
// }

// // import {allListsTabSend} from './form-add-list.js';

// // Selection changes
// function handleDropdownChange(dropdown) {
//   const selectedValue = dropdown.options[dropdown.selectedIndex].value;
//   console.log('selectedValue : ', selectedValue);

//   // let allListsTab = allListsTabSend();
//   // console.log('allListsTab : ', allListsTab);
// }
