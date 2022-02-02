function oddOrEven(array) {

    let total = array.reduce((a, b) => a + b, 0);

    if(total === 0 || total % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}