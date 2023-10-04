function createInput(placeholder) {
    let input = document.createElement('input');
    input.setAttribute('placeholder', placeholder);
    return input;
}

export {createInput};