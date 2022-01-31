const display = document.querySelector('.display');
const buttons = document.querySelector('.container__buttons').children;
const symbols = ['+', '-', '*', '/', '%', '=', 'AC'];

let buttonDelete = document.getElementById('clear');
let firstValue = '';
let secondValue = '';
let symbol = '';

const calculate = ()=> {
    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);
    if(symbol === '+') result = firstValue + secondValue;
    if(symbol === '-') result = firstValue - secondValue;
    if(symbol === '*') result = firstValue * secondValue;
    if(symbol === '/') result = firstValue / secondValue;
    if(symbol === '%') result = firstValue % secondValue;
    display.innerText = result;
    firstValue = result;
    secondValue = '';
}

for (let button of buttons){
    button.addEventListener('click', () => {
        const { innerText: btnValue } = button;
        const btnValueSymbol = symbols.includes(btnValue);
        if(!secondValue && btnValue === '=') return null;
        if(btnValue === 'AC'){
            firstValue = '';
            secondValue = '';
            symbol = '';
            return display.innerText = '';
        }
        if (firstValue && btnValueSymbol){
            secondValue && calculate();
            symbol = btnValue;
        }
        else if (!symbol) firstValue += btnValue;
        else if (symbol) secondValue += btnValue;
        if(btnValue !== '=') display.innerText += button.innerText;     
    })
}