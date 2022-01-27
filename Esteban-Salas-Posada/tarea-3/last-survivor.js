// function lastSurvivor(letters, coords) {
//   var newArray;
//   coords.forEach((value,index) => {
//     newArray = letters.split('');
//     newArray.splice(value, 1);
//     letters = newArray.join('');
//     console.log(`Array ${letters}\n`)
//   });
//   console.log(`Final del programa, resultado: ${newArray}`);
//   return letters;
// }

function lastSurvivor(letters, coords) {
    coords.reduce( (acumulator, current) => {
        letters = letters.split('')
        letters.splice(current, 1)
        letters = letters.join('')
    },0)
    return letters;
  }