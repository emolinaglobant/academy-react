function mineColor(file, rank) {
    const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
    return (isEven(files.indexOf(file)) === isEven(ranks.indexOf(rank)) ? "black": "white")
  }
function isEven(number){
    return (number%2==0 ? true : false)
  }