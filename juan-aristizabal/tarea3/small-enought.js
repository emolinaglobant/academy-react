function smallEnough(a, limit) {
  let numbers = a;
  let limite = limit;
  let bool = false;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= limite) {
      bool = true;
      console.log(numbers[i]);
    } else {
      bool = false;
    }
  }
  return bool;
}
