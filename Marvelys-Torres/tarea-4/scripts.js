let opera;
let operb;
let operation;
let res;

let result = document.getElementById("result");
const sum = document.getElementById("sum");
const resta = document.getElementById("resta");
const mul = document.getElementById("mul");
const divi = document.getElementById("divi");

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
  if (res) {
    res = undefined;
    result.textContent = "";
  }
}

dot.onclick = function () {
  cleanDisplay();
  if (result.textContent.includes(".")) return;
  result.textContent = result.textContent + ".";
};
zero.onclick = function () {
  cleanDisplay();
  if (result.textContent.length > 10) return;
  result.textContent = result.textContent + "0";
};
one.onclick = function () {
  cleanDisplay();
  if (result.textContent.length > 10) return;
  result.textContent = result.textContent + "1";
};
two.onclick = function () {
  cleanDisplay();
  if (result.textContent.length > 10) return;
  result.textContent = result.textContent + "2";
};
three.onclick = function () {
  cleanDisplay();
  if (result.textContent.length > 10) return;
  result.textContent = result.textContent + "3";
};
four.onclick = function () {
  cleanDisplay();
  if (result.textContent.length > 10) return;
  result.textContent = result.textContent + "4";
};
five.onclick = function () {
  cleanDisplay();
  if (result.textContent.length > 10) return;
  result.textContent = result.textContent + "5";
};
six.onclick = function () {
  cleanDisplay();
  if (result.textContent.length > 10) return;
  result.textContent = result.textContent + "6";
};
seven.onclick = function () {
  cleanDisplay();
  if (result.textContent.length > 10) return;
  result.textContent = result.textContent + "7";
};
eight.onclick = function () {
  cleanDisplay();
  if (result.textContent.length > 10) return;
  result.textContent = result.textContent + "8";
};
nine.onclick = function () {
  cleanDisplay();
  if (result.textContent.length > 10) return;
  result.textContent = result.textContent + "9";
};

reset.onclick = function () {
  resetear();
};

sum.onclick = function () {
  opera = result.textContent;
  operation = "+";
  clear();
};

resta.onclick = function () {
  opera = result.textContent;
  operation = "-";
  clear();
};

mul.onclick = function () {
  opera = result.textContent;
  operation = "*";
  clear();
};

divi.onclick = function () {
  opera = result.textContent;
  operation = "/";
  clear();
};

equal.onclick = function () {
  operb = result.textContent;
  solve();
};

function clear() {
  result.textContent = "";
}

function resetear() {
  result.textContent = "";
  opera = 0;
  operb = 0;
  operation = "";
}

function solve() {
  switch (operation) {
    case "+":
      res = parseFloat(opera) + parseFloat(operb);
      break;
    case "-":
      res = parseFloat(opera) - parseFloat(operb);
      break;
    case "*":
      res = parseFloat(opera) * parseFloat(operb);
      break;
    case "/":
      res = parseFloat(opera) / parseFloat(operb);
      break;
  }
  resetear();
  result.textContent = res;
}
