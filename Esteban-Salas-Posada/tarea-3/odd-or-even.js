function oddOrEven(array) {
   let sum = 0;
   array.forEach((element, index) => {
     sum += element;
   });
   return sum === 0 || sum%2==0 ? 'even': 'odd'
 
 }