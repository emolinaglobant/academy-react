let operatorA;
let operatorb;
let operation;
let answer;

let result = document.getElementById("result");
const sum = document.getElementById("sum");
const resta = document.getElementById("resta");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");

const equal = document.getElementById("equal");
const dot = document.getElementById("dot");
const reset = document.getElementById("reset");

const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

function cleanDisplay() {
  if (answer) {
    answer = undefined;
    result.textContent = "";
  }
}

function writeValue(value) {
  return (result.textContent = result.textContent + value.toString());
}

dot.onclick = function () {
  cleanDisplay();
  if (result.textContent.includes(".")) return;
  writeValue(".");
};

function performNumber(value) {
  cleanDisplay();
  if (result.textContent.length > 10) return;
  writeValue(value);
}

const buttons = [zero, one, two, three, four, five, six, seven, eight, nine];
buttons.forEach((button, i) =>
  button.addEventListener("click", () => performNumber(i))
);

function clear() {
  result.textContent = "";
}

function operat(val) {
  operatorA = result.textContent;
  operation = val;
  clear();
}

const operationButtons = [sum, resta, multiplication, division];
const operations = ["+", "-", "*", "/"];
operationButtons.forEach((button, i) =>
  button.addEventListener("click", () => {
    operat(operations[i]);
  })
);

function resetear() {
  result.textContent = "";
  operatorA = 0;
  operatorb = 0;
  operation = "";
}

reset.onclick = function () {
  resetear();
};

function solve() {
  switch (operation) {
    case "+":
      answer = parseFloat(operatorA) + parseFloat(operatorb);
      break;
    case "-":
      answer = parseFloat(operatorA) - parseFloat(operatorb);
      break;
    case "*":
      answer = parseFloat(operatorA) * parseFloat(operatorb);
      break;
    case "/":
      answer = parseFloat(operatorA) / parseFloat(operatorb);
      break;
  }
  resetear();
  result.textContent = answer;
}
equal.onclick = function () {
  operatorb = result.textContent;
  solve();
};
