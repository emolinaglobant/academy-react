function largestPairSum(array) {
  // copie el arreglo recibido
  var arrayOrdenado=array
  var ordenar=false
    // lo ordene por algoritmo burbuja de manera ascendente
   arrayOrdenado.forEach(function(valor,posicion){
     /// compruebo si el primero es mayor que el segundo y si no esta en la ultima posicion
     if(arrayOrdenado[posicion]>arrayOrdenado[posicion+1]&& arrayOrdenado.length-1 !=posicion){
       var num1 =arrayOrdenado[posicion]
       var num2=arrayOrdenado[posicion+1]
       arrayOrdenado[posicion]=num2
       arrayOrdenado[posicion+1]=num1
       ordenar=true
     }
    });
    // vuelvo a llamar la funcion
    if(ordenar){
      largestPairSum(arrayOrdenado)
    }
    return arrayOrdenado[3]+arrayOrdenado[4]
 }