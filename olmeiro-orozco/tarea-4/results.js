import { Calculator } from "./calculator.js";

export class Results {
  constructor(showOldValue, showCurrentValue) {
    this.showOldValue = showOldValue;
    this.showCurrentValue = showCurrentValue;
    this.calculator = new Calculator();
    this.typeOperation = undefined;
    this.currentValue = "";
    this.oldValue = "";

    this.signs = {
      add: "+",
      minus: "-",
      multiply: "*",
      divide: "/",
      percent: "%",
    };
  }

  addNumber(number) {
    // console.log(number);
    // console.log(this.currentValue);
    if (number === "." && this.currentValue.includes(".")) return;
    this.currentValue = this.currentValue.toString() + number.toString();
    this.showValues();
  }

  calculateType(type) {
    // console.log(type);
    this.typeOperation !== "equal" && this.calculate();
    this.typeOperation = type;
    this.oldValue = this.currentValue || this.oldValue;
    this.currentValue = "";
    this.showValues();
  }

  calculate() {
    const oldValue = parseFloat(this.oldValue);
    const currentValue = parseFloat(this.currentValue);
    // console.log(oldValue);
    // console.log(currentValue);
    if (isNaN(currentValue) || isNaN(oldValue)) return;
    this.currentValue = this.calculator[this.typeOperation](
      oldValue,
      currentValue
    );
  }

  showValues() {
    this.showCurrentValue.textContent = this.currentValue;
    this.showOldValue.textContent = `${this.oldValue} ${
      this.signs[this.typeOperation] || ""
    }`;

    // console.log("show currentValue", this.currentValue);
    // console.log("show oldValue", this.oldValue);
  }

  clearAll = () => {
    this.currentValue = "";
    this.oldValue = "";
    this.typeOperation = undefined;
    this.showValues();
  };

  clear = () => {
    this.currentValue = this.currentValue.toString().slice(0, -1);
    this.showValues();
    // console.log(currentValue);
  };
}