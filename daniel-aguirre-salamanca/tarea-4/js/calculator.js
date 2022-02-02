import { isNumber } from "./helpers.js";

class Calculator {
  constructor(number = 0) {
    this.result = number;
  }
  add(number) {
    this.result += number;
  }
  substract(number) {
    this.result -= number;
  }
  multiply(number) {
    this.result *= number;
  }
  divide(number) {
    this.result /= number;
  }
  root() {
    this.result = Math.sqrt(this.result);
  }
  apply(operator, number) {
    if (operator == "+") {
      this.add(number);
    } else if (operator == "-") {
      this.substract(number);
    } else if (operator == "x") {
      this.multiply(number);
    } else if (operator == "/") {
      this.divide(number);
    } else if (operator == "r") {
      this.root();
    }
  }
}

function calculate(string, number = "", lastOperator = false) {
  const calculator = new Calculator();
  for (const element of string) {
    if (!isNumber(element)) {
      if (lastOperator) {
        calculator.apply(lastOperator, parseFloat(number));
        [number, lastOperator] = ["", element];
        if (element == "="){return calculator.result};
      } 
      else {
        calculator.add(parseFloat(number)); // add the first number in the calculator
        [number, lastOperator] = ["", element];
      }
    } else {
      number += element;
    }
  }
}

export default calculate;
