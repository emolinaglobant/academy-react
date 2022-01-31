function spongeMeme(sentence) {
  return sentence
    .split("")
    .map((letter, i) => (i % 2 ? letter.toLowerCase() : letter.toUpperCase()))
    .join("");
}
console.log(spongeMeme("Globantwebiu"));
