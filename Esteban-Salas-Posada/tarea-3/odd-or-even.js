function oddOrEven(array) {
    //enter code here
   let sum = 0;
   array.forEach((element, index) => {
     sum += element;
     console.log(sum);
   });
   if(sum === 0 || sum%2==0){
     return 'even';
   }else{
     return 'odd';
   }
 }