function oddOrEven(array) {
  // verificamos si el arreglo está vacio
  if (array.length === 0) array.push(0);
  //sumamos los elementos del array
  let add = array.reduce((a, b) => a + b);
  //analizamos la suma
  return add % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([-1023, -1, 3]));
