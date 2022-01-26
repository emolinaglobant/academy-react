function largestPairSum(array) {
  // Ordenar arreglo descendientemente
  array.sort((number1, number2) => number2 - number1);
  // La suma de los dos primeros sera la mayor
  return array[0] + array[1];
}

console.log(largestPairSum([-10, -8, -16, -18, -19]));
