function spongeMeme(string) {
  for (let i = 0; i < string.length; i += 2) {
    var upper = string[i].toUpperCase() + string[i + 1];
    if (i > 0) {
      var newString = newString + upper;
    } else {
      var newString = upper;
    }
  }
  return newString;
}

spongeMeme("stop Making spongebob Memes!");
