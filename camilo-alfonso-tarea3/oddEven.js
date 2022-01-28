/* Given a list of integers, determine whether the sum of its elements is odd or even.
   Give your answer as a string matching "odd" or "even".
   If the input array is empty consider it as: [0] (array with a zero). 
*/

/* function oddOrEven(array) {
   let total = array.reduce((prev, curr) => prev+ curr, 0)

   if (total % 2){
      return ('odd')
   }else
      return ('even')
 } */

/* find a way to make this a one-line solution also use more than one return expression is a bad practice */

function oddOrEven (array) {
   return array.reduce ((prev, curr)=> prev + curr, 0) % 2 ? 'odd' : 'even' 
}