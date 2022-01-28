/* You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. 
If they are, return true. Else, return false.

You can assume all values in the array are numbers. */

/* function smallEnough(a, limit) {
  let check = a.find((element) => element > limit)

  if (check > 0) {
    return false;
  } else {
    return true;
  }
} */

/* find a way to make this a one-line solution also use more than one return expression is a bad practice */

function smallEnough(a, limit){
  return a.find((element) => element > limit) ? false : true 
}