const controlButtonGrid = document.querySelectorAll('.control-button');
const numberButtonGrid = document.querySelectorAll('.number-button');

const promptEntry = document.querySelector('.prompt-entry');

var buttons = Array.from(numberButtonGrid.values());
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        promptEntry.textContent += button.textContent;
    });
});
