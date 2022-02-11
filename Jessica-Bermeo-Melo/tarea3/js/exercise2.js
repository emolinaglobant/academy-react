function lastSurvivor(letters, coords) {
    let lastSurvivor = letters.split('');
    
    coords.forEach((coord) => {
        lastSurvivor.splice(coord, 1)
    })
    
    return lastSurvivor.join('');
    }