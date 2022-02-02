function oddOrEven(array) {
  let suma = 0;
  array.forEach((item) => {
    suma = suma + item;
  });
  console.log(suma);
  if (suma % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
