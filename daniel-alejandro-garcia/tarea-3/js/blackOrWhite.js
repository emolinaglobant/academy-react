function mineColor(file, rank) {
    let result;
    switch(file) {
        case 'a':
        case 'c':
        case 'e':
        case 'g':
        rank % 2 == 0 ? result = 'white' : result = 'black';
        return result;
        case 'b':
        case 'd':
        case 'f':
        case 'h':
        rank % 2 == 0 ? result = 'black' : result = 'white';
        return result;
    }
}