const numA = document.getElementById("numA");
const numB = document.getElementById("numB");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const reset = document.getElementById("reset");
const resultP = document.getElementById("result");

function addition(a, b) {
  const fistNum = parseInt(a, 10);
  const secondNum = parseInt(b, 10);
  resulNum = fistNum + secondNum;
  return resulNum;
}
function subtraction(a, b) {
  const fistNum = parseInt(a, 10);
  const secondNum = parseInt(b, 10);
  resulNum = fistNum - secondNum;
  return resulNum;
}
function multiplication(a, b) {
  const fistNum = parseInt(a, 10);
  const secondNum = parseInt(b, 10);
  resulNum = fistNum * secondNum;
  return resulNum;
}
function division(a, b) {
  const fistNum = parseInt(a, 10);
  const secondNum = parseInt(b, 10);
  resulNum = fistNum / secondNum;
  return resulNum;
}

add.addEventListener("click", (e) => {
  e.preventDefault();
  addition(numA.value, numB.value);
  resultP.innerHTML = resulNum;
});

sub.addEventListener("click", (e) => {
  e.preventDefault();
  subtraction(numA.value, numB.value);
  resultP.innerHTML = resulNum;
});
mul.addEventListener("click", (e) => {
  e.preventDefault();
  multiplication(numA.value, numB.value);
  resultP.innerHTML = resulNum;
});
div.addEventListener("click", (e) => {
  e.preventDefault();
  division(numA.value, numB.value);
  resultP.innerHTML = resulNum;
});

reset.addEventListener("click", () => {
  resulNum = 0;
  resultP.innerHTML = "Result";
});


//------------  Calculadora V2
const num0 = document.getElementById("num0");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const addV2 = document.getElementById("addv2");
const subV2 = document.getElementById("subv2");
const mulV2 = document.getElementById("mulv2");
const divV2 = document.getElementById("divv2");
const iqual = document.getElementById("iqual");
const clear = document.getElementById("clear");
const resultPV2 = document.getElementById("resultv2");
const numbers = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9];
const operators = [addV2, subV2, mulV2, divV2];
let numC;
let operator;
let numD;
let result;


numbers.map((i) => {
  i.addEventListener("click", (e) => {
    e.preventDefault();
    if (operator === undefined) {
      if (numC === undefined) {
        numC = i.value;
      } else {
        numC += i.value;
      }
      resultPV2.innerHTML = numC;
    } else {
      if (numD === undefined) {
        numD = i.value;
      } else {
        numD += i.value;
      }
      resultPV2.innerHTML = `${numC} ${operator} ${numD}`;
    }
  });
});

operators.map((i) => {
  i.addEventListener("click", (e) => {
    e.preventDefault();
    operator = i.value;
  });
});

iqual.addEventListener("click", (e) => {
  e.preventDefault();
  if (operator !== undefined && numD !== undefined) {
    if (operator === "+") {
      result = addition(numC, numD);
    } else if (operator === "-") {
      result = subtraction(numC, numD);
    } else if (operator === "x") {
      result = multiplication(numC, numD);
    } else {
      result = division(numC, numD);
    }
    resultPV2.innerHTML = result;
  } else {
    resultPV2.innerHTML = "Result";  
  }
  numC = undefined;
  operator = undefined;
  numD = undefined;
});

clear.addEventListener("click", (e) => {
  e.preventDefault();
  resultPV2.innerHTML = "Result";
  numC = undefined;
  operator = undefined;
  numD = undefined;
});
