// Odd or Even

function oddOrEven(array) {
    let result;
    
    if (array == 0) array.push(0);
    let totalsum = array.reduce((sum, total) => sum + total);

    (totalsum % 2 == 0) ? result = "even": result = "odd";

    return result;
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
