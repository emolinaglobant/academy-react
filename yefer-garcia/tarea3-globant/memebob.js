// Meme BobEsponja

function spongeMeme(ejer) {
  return ejer
    .split("")
    .map((letter, i) => (i % 2 ? letter.toLowerCase() : letter.toUpperCase()))
    .join("");
}

console.log(spongeMeme("TareaGlobant"));
