var operadora;
var operadorb;
var operacion;

function inicial (){
    var resultado = document.getElementById("resultado");    
    var clear = document.getElementById("clear");    
    var borrar = document.getElementById("borrar");    
    var dividir = document.getElementById("dividir");    
    var multiplicar = document.getElementById("multiplicar");    
    var sumar = document.getElementById("sumar");    
    var restar = document.getElementById("restar");    
    var igual = document.getElementById("igual");
    
    var cero = document.getElementById("cero");    
    var uno = document.getElementById("uno");    
    var dos = document.getElementById("dos");    
    var tres = document.getElementById("tres");    
    var cuatro = document.getElementById("cuatro");    
    var cinco = document.getElementById("cinco");    
    var seis = document.getElementById("seis");    
    var siete = document.getElementById("siete");    
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var punto = document.getElementById("punto");

    cero.onclick=function(e){
        resultado.textContent=resultado.textContent+"0";
    }
    uno.onclick=function(e){
        resultado.textContent=resultado.textContent+"1";
    }
    dos.onclick=function(e){
        resultado.textContent=resultado.textContent+"2";
    }
    tres.onclick=function(e){
        resultado.textContent=resultado.textContent+"3";
    }
    cuatro.onclick=function(e){
        resultado.textContent=resultado.textContent+"4";
    }
    cinco.onclick=function(e){
        resultado.textContent=resultado.textContent+"5";
    }
    seis.onclick=function(e){
        resultado.textContent=resultado.textContent+"6";
    }
    siete.onclick=function(e){
        resultado.textContent=resultado.textContent+"7";
    }
    ocho.onclick=function(e){
        resultado.textContent=resultado.textContent+"8";
    }
    nueve.onclick=function(e){
        resultado.textContent=resultado.textContent+"9";
    }
    clear.onclick=function(e){
        resultado.textContent=resultado.textContent+"CE";
        resetear();
    }
    sumar.onclick=function(e){
        operadora=resultado.textContent
        operacion="+"
        limpiar();
    }
    restar.onclick=function(e){
        operadora=resultado.textContent
        operacion="-"
        limpiar();
    }
    multiplicar.onclick=function(e){
        operadora=resultado.textContent
        operacion="x"
        limpiar();
    }
    dividir.onclick=function(e){
        operadora=resultado.textContent
        operacion="÷"
        limpiar();
    }
    igual.onclick=function(e){
        operadorb=resultado.textContent
        resolver();
    }
    function limpiar(){
        resultado.textContent="";
    }
    function resetear(){
        resultado.textContent="";
        operadora=0;
        operadorb=0;
        operacion='';
    }
    function resolver (){
        var res=0;
        switch(operacion){
            case "+":
                res=parseFloat(operadora)+ parseFloat(operadorb)
                break;
            case "-":
                    res=parseFloat(operadora)- parseFloat(operadorb)
                    break;
            case "x":
                res=parseFloat(operadora)* parseFloat(operadorb)
                break;
            case "÷":
                    res=parseFloat(operadora)/ parseFloat(operadorb)
                    break;             
        }
        resetear();
        resultado.textContent=res
    }
}