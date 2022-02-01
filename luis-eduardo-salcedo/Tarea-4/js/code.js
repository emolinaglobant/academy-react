const buttonNumberClick = document.getElementsByName('number');
const buttonSymbol = document.getElementsByName('operation');
const changeSignNumber = document.getElementsByName('change-sign')[0];
const equal = document.getElementsByName('equal')[0];
const deleteInput = document.getElementsByName('delete')[0];
const deleteOneNumber = document.getElementsByName('delete-1')[0];
let operationResult = document.getElementById('section-botones__input-numeros');
let currentValue = '';
let previousValue = '';
let operation;

buttonNumberClick.forEach((button) => {
    button.addEventListener('click', () => {
            currentValue = currentValue.toString() + button.innerHTML.toString();
            updateInput();
    });
});

buttonSymbol.forEach((button) => {
    button.addEventListener('click', () => {
        operationsManagement(button.innerHTML);
    });
});

changeSignNumber.addEventListener('click', () => {
    currentValue *= -1;
    updateInput();
});

deleteInput.addEventListener('click', () => {
    currentValue = '';
    previousValue = '';
    operation = undefined;
    updateInput();
});

deleteOneNumber.addEventListener('click', ()=> {
    currentValue = currentValue.substring(0, currentValue.length-1);
    updateInput();
});

equal.addEventListener('click', () => {
    calculate();
    updateInput();
});

function calculate() {
    let result;
    let concatResult = `${previousValue.toString()} ${operation.toString()} ${currentValue.toString()}` ;
    result = eval(concatResult);
    updateInput();
    currentValue = result;
    operation = undefined;
    previousValue = '';
}

function operationsManagement(button) {
    operation = button.toString();
    if(currentValue === '') return;
    if(previousValue !== '') {
        calculate();
    }
    operation = button.toString();
    previousValue =currentValue;
    currentValue = '';
}

function updateInput() {
    operationResult.value = currentValue;
}

