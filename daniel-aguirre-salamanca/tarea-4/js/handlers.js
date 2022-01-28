import * as helpers from './helpers.js';
import calculate from './calculator.js';

class Handlers{
  constructor(props){
    Object.assign(this, props);
  }
  
  buttonCalculateHandler(text) {
    if ((this.string.length == 0) & isNaN(text)) {
      [this.string, this.stringHTML] = helpers.isContinuous(this.result);
    }
    [this.string, this.stringHTML] = helpers.addText(this.string, this.stringHTML, text);
    if (text == "=") {
      this.result = calculate(this.string);
      this.resultDOM.innerHTML = helpers.formatNumber(this.result);
      [this.string, this.stringHTML] = ["", ""];
    } else {
      this.resultDOM.innerHTML = this.stringHTML;
    }
  }

  buttonResetHandler(){
    [this.string, this.stringHTML] = ["", ""];
    this.resultDOM.innerHTML = "0";
    this.result = 0
  }
  
  buttonEraseHandler(){
    [this.string, this.stringHTML] = [this.string.slice(0, -1), this.stringHTML.slice(0, -1)];
    this.resultDOM.innerHTML = this.stringHTML;
  }
}

export default Handlers;
