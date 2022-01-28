function largestPairSum(numbers) {
  //ordena descendientemente y suma las primeras posiciones
  //las cuales son las mas "grandes"
  let numero = numbers.sort((a, b) => b - a);

  return numbers[0] + numbers[1];
}
