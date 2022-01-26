function oddOrEven(array) {
    let accumulator = array.reduce((accum, current) => accum + current, 0);
    return accumulator % 2 === 0 ? "even" : "odd";
  }