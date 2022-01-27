function oddOrEven(array) {
   let sum = 0;
   array.forEach((element) => {
     sum += element;
   });
   sum === 0 || sum%2==0 ? 'even' : 'odd';
 }