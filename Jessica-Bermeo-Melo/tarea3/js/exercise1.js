function oddOrEven(array) {
    if(array.length === 0) return 'even';
    
    const sum = array.reduce((prev , cur) => prev+ cur)%2 === 0 ? 'even':'odd'
    return sum;
    
    }