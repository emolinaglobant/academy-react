function spongeMeme(str) {
    var longitud=str.length
    var array = str.split('').map((caracter, posicion) => posicion % 2 == 0 ? caracter .toUpperCase() : caracter.toLowerCase());
    return array.slice(0,longitud);
  }
  console.log(spongeMeme("spongememela"))
