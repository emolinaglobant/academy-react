function oddOrEven(array) {
    let result;
    
    if(array.length !== 0) {
        let sum = array.reduce((sum, total) => sum + total);
        if(sum % 2 === 0) {
            result = 'even';
        } else {
            result = 'odd';
        }
    } else {
        return 'even';
    }
    return result;
}