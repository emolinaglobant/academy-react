
let valorActual = 0; 
let operacion = "0"; 

let valorAnterior = null;

const calculadoraScreen = document.querySelector(".section-botones__input-numeros");

document.querySelector('.calculadora__section-botones').addEventListener("click",function(event){
    buttonClick(event.target.innerHTML);
});

function buttonClick(value){
    if(isNaN(parseInt(value))){
        symbolos(value);
    }else{
        manejoDeNumeros(value);
    }
    cargarPantalla();
}
function cargarPantalla(){
    calculadoraScreen.value = operacion;
}

function symbolos(value){
    switch (value){
        case "C":
            operacion = "0";
            valorActual = 0;
            valorAnterior = null;
            break;
        case "=":
            if(valorAnterior === null){ 
                return;
            }
            operadores(parseInt(operacion));
            operacion = "" + valorActual;
            valorAnterior = null;
            valorActual = 0;
            break;
        case "←":
            if(operacion.length === 1){ 
                operacion = "0";
            }
            else{
                operacion = operacion.substring(0,operacion.length-1);  
            }
            break;
        default:
            manejoDeOperaciones(value);
            break;
    }
}

function manejoDeNumeros(value){
    if(operacion === "0"){
        operacion = value;
    }else{
        operacion += value;
    }
}

function manejoDeOperaciones(value){
    const operacionInterna = parseInt(operacion);
    
    if (valorActual === 0){
        valorActual = operacionInterna;
    }else{
        operadores(operacionInterna);
    }
    valorAnterior = value;
    operacion = "0";
}

function operadores(operacionInterna){
    switch(valorAnterior){
        case "+":
            valorActual += operacionInterna;
        break;
        case "-":
            valorActual -= operacionInterna;
        break;
        case "x":
            valorActual *= operacionInterna;
        break;
        case "÷":
            valorActual /= operacionInterna;
        break;
        case "^":
            valorActual **= operacionInterna;
        break;
    }
}
