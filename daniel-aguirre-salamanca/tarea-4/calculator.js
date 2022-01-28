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

function calculate(string) {
    let [operator, number] = [false, ""];
    const calculator = new Calculator();
    for (element of string) {
      if (isNaN(element) & (element != ".")) {
        if (operator) {
          number = parseFloat(number);
          calculator.apply(operator, number);
          [number, operator] = ["", element];
          if (operator == "=") {
            return calculator.result;
          }
        } else {
          number = parseFloat(number);
          calculator.add(number); // add the first number in the calculator
          [number, operator] = ["", element];
        }
      } else {
        number += element;
      }
    }
  }
