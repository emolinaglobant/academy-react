function mineColor(file, rank) {
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
  return Even(files.indexOf(file)) === Even(ranks.indexOf(rank))
    ? "black"
    : "white";
}
function Even(number) {
  return number % 2 === 0 ? true : false;
}
