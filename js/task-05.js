const span = document.querySelector("#name-output");

const textinput = document.querySelector("#name-input");

const placeholder = (event) => {
    span.textContent = textinput.value !== ''
        ? event.currentTarget.value
        : 'Anonymous';
};

textinput.addEventListener('input', placeholder);