const buttonNumbers = document.getElementsByName('data-number');
const buttonOperations = document.getElementsByName('data-operation');
const equal = document.getElementsByName('data-equal')[0];
const deleteScreen = document.getElementsByName('data-delete')[0];
const changeSignNumber = document.getElementsByName('data-change-sign')[0];
let result = document.getElementById('screen');
let numCurrent = '';
let numPrevious = '';
let operation = undefined;

buttonNumbers.forEach((button) => {
    button.addEventListener('click', () => {
        addNumber(button.innerHTML);
    });
});

buttonOperations.forEach((button) => {
    button.addEventListener('click', () => {
        selectOperation(button.innerHTML);
    });
});

equal.addEventListener('click', () => {
    calculate();
    updateScreen();
});

deleteScreen.addEventListener('click', () => {
    clearScreen();
    updateScreen();
});

changeSignNumber.addEventListener('click', () => {
    numCurrent *= -1;
    updateScreen();
});

function clearScreen() {
    numCurrent = '';
    numPrevious = '';
    operation = undefined;
}

function addNumber(num) {
    numCurrent = numCurrent.toString() + num.toString();
    updateScreen();
}

function selectOperation(button) {
    operation = button.toString();
    if(numCurrent === '') return;
    if(numPrevious !== '') {
        calculate();
    }
    operation = button.toString();
    numPrevious =numCurrent;
    numCurrent = '';
}

function updateScreen() {
    result.value = numCurrent;
}

function calculate() {
    let cal;
    const previous = parseFloat(numPrevious);
    const current = parseFloat(numCurrent);
    if(isNaN(previous) || isNaN(current)) return;
    switch(operation) {
        case '+':
            cal = previous + current;
            break;
        case '-':
            cal = previous - current;
            break;
        case 'x':
            cal = previous * current;
            break;
        case '÷':
            cal = previous / current;
            break;
        case '%':
            cal = (previous * current) / 100;
            break
        default:
            return;
    }
    updateScreen();
    numCurrent = cal;
    operation = undefined;
    numPrevious = '';
}