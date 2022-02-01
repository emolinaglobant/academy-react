import { Calculator } from "./calculator.js";

export class Results {
  calculator;
  currentValue;
  oldValue;
  showCurrentValue;
  showOldValue;
  signs;
  typeOperation;

  constructor(showOldValue, showCurrentValue) {
    this.calculator = new Calculator();
    this.currentValue = "";
    this.oldValue = "";
    this.showCurrentValue = showCurrentValue;
    this.showOldValue = showOldValue;
    this.typeOperation = undefined;

    this.signs = {
      add: "+",
      minus: "-",
      multiply: "*",
      divide: "/",
      percent: "%",
    };
  }

  addNumber(number) {
    if (number === "." && this.currentValue.includes(".")) return;
    this.currentValue = this.currentValue.toString() + number.toString();
    this.showValues();
  }

  calculate() {
    const oldValue = parseFloat(this.oldValue);
    const currentValue = parseFloat(this.currentValue);
    if (isNaN(currentValue) || isNaN(oldValue)) return;
    this.currentValue = this.calculator[this.typeOperation](
      oldValue,
      currentValue
    );
  }

  calculateType(type) {
    this.typeOperation !== "equal" && this.calculate();
    this.typeOperation = type;
    this.oldValue = this.currentValue || this.oldValue;
    this.currentValue = "";
    this.showValues();
  }

  clear = () => {
    this.currentValue = this.currentValue.toString().slice(0, -1);
    this.showValues();
  };

  clearAll = () => {
    this.currentValue = "";
    this.oldValue = "";
    this.typeOperation = undefined;
    this.showValues();
  };

  showValues() {
    this.showCurrentValue.textContent = this.currentValue;
    this.showOldValue.textContent = `${this.oldValue} ${
      this.signs[this.typeOperation] || ""
    }`;
  }
}