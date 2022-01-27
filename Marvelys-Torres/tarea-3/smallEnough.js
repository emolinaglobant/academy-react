function smallEnough(a, limit) {
  //comparamos todos los elementos del array e identificamos el mayor
  largest = Math.max(...a);
  // evaluamos si el mayor es menor o igual q el limite dado
  return largest <= limit ? true : false;
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
