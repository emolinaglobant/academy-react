function largestPairSum(numbers) {
  //TODO: Write your Code here
  var max1 = Math.max(...numbers);
  var newNumbers = numbers.filter((number) => number != max1);
  var max2 = Math.max(...newNumbers);
  return max1 + max2;
}
