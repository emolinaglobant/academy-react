import Handlers from './js/handlers.js'

const globalVariables = {string: "", stringHTML: "", result: undefined, resultDOM: document.getElementById("result")};

const handlers = new Handlers(globalVariables);

const buttonsCalculate = document.querySelectorAll(".number, .operator");
Object.values(buttonsCalculate).map(button=>button.addEventListener("click",
()=>button.className.split(" ")[0] == "operator" ? handlers.buttonCalculateHandler(button.id) : handlers.buttonCalculateHandler(button.textContent)
));

const buttonReset = document.querySelector(".reset");
buttonReset.addEventListener("click", () => handlers.buttonResetHandler());

const buttonErase = document.querySelector(".erase");
buttonErase.addEventListener("click", () => handlers.buttonEraseHandler());