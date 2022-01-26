function lastSurvivor(letters, coords) {
    let lettersArray = letters.split("");
    coords.map((i) => lettersArray.splice(i, 1));
    return lettersArray.toString();
  }