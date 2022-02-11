import Calculator from './Calculator.js'
export default class Display{
    constructor(displayPreviousValue, displayCurrentValue){
        this.displayPreviousValue = displayPreviousValue;
        this.displayCurrentValue  = displayCurrentValue;
        this.calculator           = new Calculator();
        this.typeOperation        = undefined;
        this.previousValue        = '';
        this.currentValue         = '';
        this.signs                = { division:'%', multiplication:'*',subtraction:'-',sum:'+',}
    }

    addNumber(number){
        if (number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.printValues();
    }

    calculate(){
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);

        if(isNaN(previousValue) ||isNaN( currentValue))return
        this.currentValue = this.calculator[this.typeOperation](previousValue,currentValue);
    }

    compute(type){
        this.typeOperation !== 'equals' && this.calculate();
        this.typeOperation = type;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = '';
        this.printValues();
    }
    delete(){
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.printValues();
    }

    deleteAll(){
        this.currentValue = '';
        this.previousValue = '';
        this.typeOperation = undefined;
        this.printValues();
    }

    printValues(){
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.signs[this.typeOperation] || ''}`;
    }

}

