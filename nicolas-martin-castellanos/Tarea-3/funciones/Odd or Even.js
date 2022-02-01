function oddOrEven(arrayOddOrEven) {
   let suma=0
   if (arrayOddOrEven.length === 0){arrayOddOrEven.push(0);}else{
      return suma = arrayOddOrEven.reduce((valor, index) => valor + index)% 2 === 0 ? "even" : "odd";
   } 
 }