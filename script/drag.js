const draggables = document.querySelectorAll(".draggable"); // Selectionne toute les classes "draggable"
const containers = document.querySelectorAll(".container"); // Selectionne toute les classes "container"

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElmt = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector(".dragging");
    if (afterElmt == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElmt);
    }
  });
});

function getDragAfterElement(container, y) {
  const draggableElmt = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElmt.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}