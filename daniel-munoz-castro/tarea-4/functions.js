const displayCurrentValue  = document.getElementById('current-value');
const displayPreviousValue  = document.getElementById('previous-value');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const display = new Display(displayCurrentValue, displayPreviousValue);

numberButtons.forEach(boton =>{
    boton.addEventListener('click',() => display.addNumber(boton.innerHTML));
});

operatorButtons.forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value) );
})