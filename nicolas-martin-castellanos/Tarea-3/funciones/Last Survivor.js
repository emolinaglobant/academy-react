function largestPairSum(array) {
  var longitud=array.length
  console.log(longitud)
  var aux=0
   // Ordenar arreglo descendientemente con metodo burbuja
   for(var i=0; i<longitud; i++) {
       for(var j=0; j<(longitud-i-1); j++) {
         if(array[j]>array[j+1]) {
          aux=array[j]
          array[j] = array[j+1]
          array[j+1] =aux
       }
     }
   }
   for(var k=0;k<longitud;k++){
     console.log(array[k])
   }
   // La suma de los dos primeros sera la mayor
   return array[3] + array[4];
 }
 console.log(largestPairSum([5, 2, 2, 23, 99]));
  
