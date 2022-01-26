// Negras para impares:
// [a,c,e,g] = [1,3,5,7]
// Negras para pares:
// [b,d,f,h] = [2,4,6,8];
// Blancas para impares:
// [b,d,f,h] = [1,3,5,7]
// Blancas para pares:
// [a,c,e,g] = [2,4,6,8,] ;

function mineColor(file, rank) {
  let oddFiles = ["a", "c", "e", "g"];
  let oddRanks = [1, 3, 5, 7];
  let evenFiles = ["b", "d", "f", "h"];
  let evenRanks = [2, 4, 6, 8];

  if (oddFiles.includes(file)) {
    //esimpar
    if (oddRanks.includes(rank)) {
      //es impar
      return "black";
    } else {
      //es par
      return "white";
    }
  } else {
    //espar
    if (oddRanks.includes(rank)) {
      return "white";
    } else {
      return "black";
    }
  }
}

console.log(mineColor("a", 8));
console.log(mineColor("b", 2));
console.log(mineColor("f", 5));