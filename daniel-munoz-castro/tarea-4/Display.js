class Display{
    constructor(displayCurrentValue, displayPreviousValue){
        this.displayCurrentValue = displayCurrentValue;
        this.displayPreviousValue = displayPreviousValue;
        this.caluculador = new Calculator();
        this.typeOperation = undefined;
        this.currentValue = '';
        this.previousValue = '';
        this.signs = {
            add: '+',
            divide: '%',
            subtract: '-',
            multiply: 'x',
    }
    }

    deleteCharacter(){
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.printValues();
    }

    deleteAll(){
        this.currentValue = '';
        this.previousValue = '';
        this.typeOperation = undefined;
        this.printValues();
    }

    computar(tipo){
        this.typeOperation !== 'igual' && this.calculate();
        this.typeOperation = tipo;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = '';
        this.printValues();
    }

    addNumber(number){
        if(number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.printValues();
    }

    printValues(){
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = ` ${this.previousValue} ${this.signs[this.typeOperation] || ''} `;
    }

    calculate(){
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);
        if(isNaN(currentValue) || isNaN(previousValue)) return
        this.currentValue = this.caluculador [this.typeOperation](previousValue, currentValue);
    }
}