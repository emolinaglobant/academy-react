function lastSurvivor(letters, coords) {
    var newArray;
    coords.forEach((value,index) => {
      newArray = letters.split('');
      newArray.splice(value, 1);
      letters = newArray.join('');
      console.log(`Array ${letters}\n`)
    });
    console.log(`Final del programa, resultado: ${newArray}`);
    return letters;
  }