function createButton(text, clickHandler) {
    let button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    return button;
}

export {createButton};