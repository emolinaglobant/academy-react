function oddOrEven(array) {
    return array.reduce( function (add, lst) { return add + lst }, 0) % 2 == 0 ? 'even': 'odd';
}  
console.log(oddOrEven([0,0]));
console.log(oddOrEven([1,4]));