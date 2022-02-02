function spongeMeme(sentence) {
  let array = sentence.split(''), result=''
  array.forEach((value, index) => index%2==0 ? result += value.toUpperCase() : result += value.toLowerCase());
  return result 
}