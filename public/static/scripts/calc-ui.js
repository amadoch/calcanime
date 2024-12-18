const addButton = document.querySelector('#addition');
const subButton = document.querySelector('#subtract');
const mulButton = document.querySelector('#multiply');
const divButton = document.querySelector('#division');
const modButton = document.querySelector('#modulus');

const numberButtonGrid = document.querySelectorAll('.number-button');

const clearButton = document.querySelector('#clearPrompt');
const promptEntry = document.querySelector('.prompt-entry');
const promptResult = document.querySelector('.prompt-result');

const lastSymbol = /( \W )$/;
const lastDigit = /\d+$/;

//logica del programa
var numberGrid = Array.from(numberButtonGrid.values());
numberGrid.forEach((button) => {
    button.addEventListener('click', (event) => {
        promptEntry.textContent += button.textContent;
    });
});

clearButton.addEventListener('click', () =>{
    promptEntry.textContent = '';
    promptResult.textContent = '0';
});

addButton.addEventListener('click', () => {
    let entryExpresion = promptEntry.textContent.toString();
    
    if (entryExpresion === '') {
        return;
    } else if (entryExpresion.match(lastSymbol)) {
        promptEntry.textContent += ' 0 + ';    
        return;
    } else if (entryExpresion.match(lastDigit)) {
        promptEntry.textContent += ' + ';
        return;
    }
});

subButton.addEventListener('click', () => {
    let entryExpresion = promptEntry.textContent.toString();
    
    if (entryExpresion === '') {
        return;
    } else if (entryExpresion.match(lastSymbol)) {
        promptEntry.textContent += ' 0 - ';    
        return;
    } else if (entryExpresion.match(lastDigit)) {
        promptEntry.textContent += ' - ';
        return;
    }
});

mulButton.addEventListener('click', () => {
    let entryExpresion = promptEntry.textContent.toString();
    
    if (entryExpresion === '') {
        return;
    } else if (entryExpresion.match(lastSymbol)) {
        promptEntry.textContent += ' 0 * ';    
        return;
    } else if (entryExpresion.match(lastDigit)) {
        promptEntry.textContent += ' * ';
        return;
    }
});

divButton.addEventListener('click', () => {
    let entryExpresion = promptEntry.textContent.toString();
    
    if (entryExpresion === '') {
        return;
    } else if (entryExpresion.match(lastSymbol)) {
        promptEntry.textContent += ' 0 / ';    
        return;
    } else if (entryExpresion.match(lastDigit)) {
        promptEntry.textContent += ' / ';
        return;
    }
});

modButton.addEventListener('click', () => {
    let entryExpresion = promptEntry.textContent.toString();
    
    if (entryExpresion === '') {
        return;
    } else if (entryExpresion.match(lastSymbol)) {
        promptEntry.textContent += ' 0 % ';    
        return;
    } else if (entryExpresion.match(lastDigit)) {
        promptEntry.textContent += ' % ';
        return;
    }
});