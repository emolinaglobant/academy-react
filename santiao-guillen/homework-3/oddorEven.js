// Odd or Even

function oddOrEven(array) {
    let totalsum = array.reduce((sum, total) => sum + total,0);
    console.log((totalsum % 2 == 0) ? "even" : "odd");
}

// Edge tests
oddOrEven([0]);
oddOrEven([1]);
oddOrEven([]);

// Even tests
oddOrEven([0 , 1, 5]);
oddOrEven([1023, 1 , 2]);

// Negative Even tests
oddOrEven([0 , -1 , -3]);
oddOrEven([-1023 , 1 , -2]);

// Odd tests
oddOrEven([0 , 1 , 2]);
oddOrEven([1023 , 1 , 3]);

// Negative Odd tests
oddOrEven([0 , -1 , 2]);
oddOrEven([-1023 , -1 , 3]);
