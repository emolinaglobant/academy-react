import { Results } from "./results.js";

const showCurrentValue = document.getElementById("currentValue");
const showOldValue = document.getElementById("oldValue");

const btnNumbers = document.querySelectorAll(".number");
const btnOperators = document.querySelectorAll(".operator");

const btnClear = document.getElementById("clear");
const btnClearAll = document.getElementById("clearAll");

const results = new Results(showOldValue, showCurrentValue);

btnClear.addEventListener("click", results.clear);
btnClearAll.addEventListener("click", results.clearAll);

btnNumbers.forEach((btn) => {
  btn.addEventListener("click", () => results.addNumber(btn.innerHTML));
});

btnOperators.forEach((btn) => {
  btn.addEventListener("click", () => results.calculateType(btn.value));
});
