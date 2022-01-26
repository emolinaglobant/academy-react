function mineColor(file, rank) {
    let result;
    if(file =="a"|| file =="c"|| file == "e"|| file == "g") {
        if(rank % 2 == 1) {
            result = 'black';
            return result;
        } else {
            result = 'white'
            return result;
        }
    } else {
        if(rank % 2 == 0) {
            result = 'black'
            return result;
        } else {
            result = 'white';
            return result;
        }
    }
}