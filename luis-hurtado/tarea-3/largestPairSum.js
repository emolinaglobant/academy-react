function largestPairSum (numbers) {
    
    let sortNumbers = numbers.sort((a, b) => b - a);
      
    let sumNumbers = sortNumbers[0] + sortNumbers[1];
    
    return(
      sumNumbers
    )
}