function spongeMeme(sentence) {
  let splitedSentence = sentence.split("");
  let newSentence = "";

  splitedSentence.forEach((letter, index) => {
    if (index % 2 === 0) {
      newSentence = newSentence + letter.toUpperCase();
    } else {
      newSentence = newSentence + letter.toLowerCase();
    }
  });

  return newSentence;
}
