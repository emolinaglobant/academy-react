function spongeMeme(sentence) {
  let palabra = sentence.split("");
  let nuevaPalabra = "";

  for (let i = 0; i < palabra.length; i++) {
    if (i % 2 !== 0) {
      nuevaPalabra += palabra[i].toLowerCase();
    } else {
      nuevaPalabra += palabra[i].toUpperCase();
    }
  }
  return nuevaPalabra;
}
