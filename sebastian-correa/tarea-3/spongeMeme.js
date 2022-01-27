/**
 * This function converts an input into a format that alternates uppercase and lowercase letters.
 * @param {string} sentence - The input sentence to apply the pattern.
 * @returns The sentence formatted using the pattern.
 */
function spongeMeme(sentence) {
  let arr = sentence.split('').map((letter, index) => index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase());
  return arr.join('');
}
