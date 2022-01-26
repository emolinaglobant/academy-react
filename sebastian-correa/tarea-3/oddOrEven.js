/**
 * This function determines if the sum of a list of integers is odd or even.
 * @param {[number]} array - A list of integers. It could also be an empty array.
 * @returns Whether the sum of elements is even or odd. If the array is empty, the sum is considered even.
 */
function oddOrEven(array) {
  return array.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd";
}
