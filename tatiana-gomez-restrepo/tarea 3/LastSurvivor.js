function lastSurvivor(letters, coords){
    let data = letters.split('');
    for (let i = 0; i < (coords.length - 1); i++){
        data.splice (coords[i],1);
    }
    return data[0];
}