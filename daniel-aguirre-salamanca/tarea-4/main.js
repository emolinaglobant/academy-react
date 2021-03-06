import Handlers from './js/handlers.js'

const globalVariables = {string: "", stringHTML: "", result: undefined, resultDOM: document.getElementById("result")};

const handlers = new Handlers(globalVariables);

const buttonsNumbers = document.querySelectorAll(".number");
Object.values(buttonsNumbers).map( button => button.onclick = () => handlers.buttonCalculate(button.textContent));

const buttonsOperators = document.querySelectorAll(".operator");
Object.values(buttonsOperators).map( button => button.onclick = () => handlers.buttonCalculate(button.id));

const buttonReset = document.querySelector(".reset");
buttonReset.onclick = () => handlers.buttonReset();

const buttonErase = document.querySelector(".erase");
buttonErase.onclick= () => handlers.buttonErase();