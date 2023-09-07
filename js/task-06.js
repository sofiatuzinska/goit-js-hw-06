
const input = document.querySelector("#validation-input")

input.addEventListener("blur", handleBlur);

function handleBlur(event) {
    const inputData = Number(input.dataset.length)
    const inputValue = Number(input.value.trim().length)

    if (inputValue === inputData) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
    else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}