import Display from './Display.js'
const displayPreviousValue = document.getElementById('previous-value');
const displayCurrentValue  = document.getElementById('current-value');
const displayDeleteAll     = document.getElementById('delete-all');
const displayDelete        = document.getElementById('delete');
const numberButtons        = document.querySelectorAll('.number');
const operationButtons     = document.querySelectorAll('.operator');
const display              = new Display(displayPreviousValue, displayCurrentValue);

numberButtons.forEach( button => {
    button.addEventListener('click',() => display.addNumber(button.innerHTML));
});

operationButtons.forEach( button => {
    button.addEventListener('click',() => display.compute(button.value));
});

displayDeleteAll.addEventListener('click', () => {
    display.deleteAll(displayDeleteAll.innerHTML)
});

displayDelete.addEventListener('click', () => {
    display.delete(displayDelete.value)
});