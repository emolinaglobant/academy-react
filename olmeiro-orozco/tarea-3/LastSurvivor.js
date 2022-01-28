// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'

function lastSurvivor(letters, coords) {
  let arrayLetters = letters.split("");
  for (let i = 0; i < coords.length; i++) {
    arrayLetters.splice(coords[i], 1);
  }
  return arrayLetters.toString();
}

console.log(lastSurvivor(str, arr));