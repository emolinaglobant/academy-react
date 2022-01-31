class Display {
  constructor(displayPrevValue, displayCurrentValue) {
    this.displayPrevValue = displayPrevValue;
    this.displayCurrentValue = displayCurrentValue;
    this.calculator = new Calculator();
    this.operationType = undefined;
    this.prevValue = '';
    this.currentValue = '';
    this.mathSymbols = {
      sum: '+',
      substract: '-',
      multiply: 'x',
      divide: '/',
    }
  }

  erase() {
    this.currentValue = this.currentValue.toString().slice(0, -1);
    this.printValues();
  }

  clearDisplay() {
    this.currentValue = '';
    this.prevValue = '';
    this.operationType = undefined;
    this.printValues();
  }

  compute(type) {
    this.operationType !== 'equal' && this.calculate();
    this.operationType = type;
    this.prevValue = this.currentValue || this.prevValue;
    this.currentValue = '';
    this.printValues();
  }

  addNumber(number) {
    if(number === '.' && this.currentValue.includes('.')) return
    this.currentValue = this.currentValue.toString() + number.toString();
    this.printValues();
  }

  printValues() {
    this.displayCurrentValue.textContent = this.currentValue;
    this.displayPrevValue.textContent = `${this.prevValue} ${this.mathSymbols[this.operationType] || '' }`;
  }

  calculate() {
    const prevValue = parseFloat(this.prevValue);
    const currentValue = parseFloat(this.currentValue);

    if( isNaN(currentValue) || isNaN(prevValue)) return;
    this.currentValue = this.calculator[this.operationType](prevValue, currentValue);
  }
}