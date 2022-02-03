function largestPairSum (numbers) {

    let sortNumbers = numbers.sort((a, b) => b - a);  
      
    return(
      sortNumbers[0] + sortNumbers[1]
    )
}