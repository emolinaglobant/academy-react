// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
  let suma = 0;
  let result;
  if (array.length === 0 || (array.length === 1 && array[0] === 0)) {
    result =  "even";
  } else if (array.length === 0 && array[0] === 1) {
    result = "odd";
  } else {
    suma = array.reduce((acc, n) => acc + n);
    if (suma % 2 === 0) {
      result = "even";
    } else {
      result = "odd";
    }
  }
  return result;
}

console.log(oddOrEven([0])); //even
console.log(oddOrEven([1])); //odd
console.log(oddOrEven([])); //even
console.log(oddOrEven([0, 1, 4])); //odd
console.log(oddOrEven([0, -1, -5])); //even