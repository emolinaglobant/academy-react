const spongeMeme = (sentence) => 

//con Split separamos las letras y le hacemos un map. 
sentence.split('').map((letra, i, array) =>
    //si i modulo de 2 es true, minuscula sino mayuscula
    i % 2 ? letra.toLowerCase() : letra.toUpperCase()
              
  ).join('')


