function showResult(value) {
    document.getElementById('result').innerHTML = value;
}

function getResult() {
    return(document.getElementById('result').innerHTML);
}

function add(num) { 
    
    var result = getResult();
    if (result!='0') showResult(result+num);
    else showResult(num);
}

function calculate() {
    var result = eval(getResult()); 
    showResult(result);
}

function allClear() { 
    showResult(0);
}