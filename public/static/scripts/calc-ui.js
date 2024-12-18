const clr = document.querySelector('#clr');
const div = document.querySelector('#mdiv');
const mul = document.querySelector('#mul');
const sub = document.querySelector('#sub');
const add = document.querySelector('#add');
const equal = document.querySelector('#equal');

const buttonGrid = document.querySelectorAll('.button-grid > button');

const promptResult = document.querySelector('.prompt-result');
const promptEntry = document.querySelector('#calc-entry');

var buttons = Array.from(buttonGrid.values());
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        promptEntry.textContent += button.textContent;
    });
});

clr.addEventListener('click', () => {
    promptResult.textContent = 0;
    promptEntry.textContent = '';
});

add.addEventListener('click', () => {
    if (promptEntry.textContent === '') {
        return;
    } else {
        promptEntry.textContent += ' + ';
    }
});

sub.addEventListener('click', () => {
    if (promptEntry.textContent === '') {
        return;
    } else {
        promptEntry.textContent += ' - ';
    }
});

mul.addEventListener('click', () => {
    if (promptEntry.textContent === '') {
        return;
    } else {
        promptEntry.textContent += ' * ';
    }
});

div.addEventListener('click', () => {
    if (promptEntry.textContent === '') {
        return;
    } else {
        promptEntry.textContent += ' / ';
    }
});
