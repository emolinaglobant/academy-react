// initialize my name

function initializeNames(name) {
  var n = name.split(" ");
  if (n.length < 3) return name;
  for (i = 1; i < n.length - 1; i++) {
    n[i] = n[i][0] + ".";
  }
  return n.join(" ");
}
console.log(initializeNames("Yefer Garcia "));
