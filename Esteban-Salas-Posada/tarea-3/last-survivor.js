function lastSurvivor(letters, coords) {
    coords.reduce( (acumulator, current) => {
        letters = letters.split('')
        letters.splice(current, 1)
        letters = letters.join('')
    },0)
    return letters;
}