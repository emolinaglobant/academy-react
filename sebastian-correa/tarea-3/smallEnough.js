/**
 * This function checks if all the values of an array are below or equal to a limit value.
 * @param {[number]} a - An array of numbers.
 * @param {number} limit - The limit value.
 * @returns If all the numbers of the array meet the conditions.
 */
function smallEnough(a, limit) {
  return a.every((num) => num <= limit);
}
