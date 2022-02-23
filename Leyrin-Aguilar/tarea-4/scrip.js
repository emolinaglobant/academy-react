//Declarando todos los elementos del HTML
const result = document.getElementById("result");
const clearButton = document.getElementById("clearButton");
const signPositiveOrNegativeButton = document.getElementById(
  "signPositiveOrNegativeButton"
);
const percentageButton = document.getElementById("percentageButton");
const multiplicationButton = document.getElementById("multiplicationButton");
const divisionButton = document.getElementById("divisionButton");
const substractionButton = document.getElementById("substractionButton");
const sumButton = document.getElementById("sumButton");

//Variables
let firstNumber = "none";
let secondNumber = "none";
let operation = "none";
let aClear = true;

//Funciones de los botones

//Esta función cambia el estilo de los botones
function changeStyleButton(button) {
  button.style.cssText =
    "border-color: #FFFFFF; background-color: #FFFFFF; color: #F77F08;";
}

//Esta función cambia el estilo de los botones
function changeStyleButtonsToStandard() {
  if (operation == "x") {
    multiplicationButton.style.cssText =
      "border-color: #F77F08; background-color: #F77F08; color: #FFFFFF;";
  }
  if (operation == "/") {
    divisionButton.style.cssText =
      "border-color: #F77F08; background-color: #F77F08; color: #FFFFFF;";
  }
  if (operation == "-") {
    substractionButton.style.cssText =
      "border-color: #F77F08; background-color: #F77F08; color: #FFFFFF;";
  }
  if (operation == "+") {
    sumButton.style.cssText =
      "border-color: #F77F08; background-color: #F77F08; color: #FFFFFF;";
  }
}

//Esta función cambia el estilo de los botones si alguno estaba actualmente presionado
function changeBetweenOperations(button) {
  changeStyleButtonsToStandard();
  changeStyleButton(button);
}

//Esta función aplica para todos los botones con números
function numberButton(number) {
  //Se cambia el valor de AC por C
  clearButton.innerText = "C";
  aClear = false;

  if (operation == "none") {
    if (result.innerText.indexOf(".") > -1 || result.innerText != 0) {
      result.innerText += number;
    } else if (result.innerText.indexOf("-0") > -1) {
      result.innerText = "-" + number;
    } else {
      result.innerText = number;
    }
  } else {
    if (firstNumber == Number(result.innerText)) {
      result.innerText = number;
    } else if (result.innerText.indexOf(".") > -1 || result.innerText != 0) {
      result.innerText += number;
    } else if (result.innerText.indexOf("-0") > -1) {
      result.innerText = "-" + number;
    } else {
      result.innerText = number;
    }
  }
}

clearButton.onclick = function () {
  if (!aClear) {
    //Se cambia el valor de AC por C
    clearButton.innerText = "AC";
    aClear = true;
  } else if (operation != "none") {
    changeStyleButtonsToStandard();
    operation = "none";
    firstNumber = "none";
  }
  result.innerText = 0;
};

signPositiveOrNegativeButton.onclick = function () {
  if (result.innerText.indexOf("-") == -1) {
    result.innerText = "-" + result.innerText;
  } else {
    result.innerText = result.innerText.slice(1);
  }
  firstNumber = Number(result.innerText);
};

percentageButton.onclick = function () {
  result.innerText = result.innerText / 100;
};

function decimalButtonFunction() {
  if (result.innerText.indexOf(".") == -1 && firstNumber == "none") {
    result.innerText += ".";
  } else {
    result.innerText = "0.";
  }
}

function multiplicationButtonFunction() {
  changeBetweenOperations(multiplicationButton);
  firstNumber = Number(result.innerText);
  operation = "x";
}

function divisionButtonFunction() {
  changeBetweenOperations(divisionButton);
  firstNumber = Number(result.innerText);
  operation = "/";
}

function substractionButtonFunction() {
  changeBetweenOperations(substractionButton);
  firstNumber = Number(result.innerText);
  operation = "-";
}

function sumButtonFunction() {
  changeBetweenOperations(sumButton);
  firstNumber = Number(result.innerText);
  operation = "+";
}

function resultButtonFunction() {
  if (operation != "none") {
    secondNumber = Number(result.innerText);
    if (operation == "x") {
      result.innerText = "" + firstNumber * secondNumber;
    }
    if (operation == "/") {
      result.innerText = "" + firstNumber / secondNumber;
    }
    if (operation == "-") {
      result.innerText = "" + (firstNumber - secondNumber);
    }
    if (operation == "+") {
      result.innerText = "" + (firstNumber + secondNumber);
    }
    changeStyleButtonsToStandard();
  }
}
