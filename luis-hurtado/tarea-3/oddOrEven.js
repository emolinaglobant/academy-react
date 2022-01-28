function oddOrEven(array) {

    let sumNumbers = 0;
    
    array.forEach((item) => {
      sumNumbers = sumNumbers + item;
    });

    let numbers = sumNumbers % 2 === 0 ? 'even' : 'odd'
    
    return numbers
}
