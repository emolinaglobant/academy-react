// sandwich

function duplicateSandwich(a) {
  for (let i = 0; i < a.length - 1; i++)
    if (a.indexOf(a[i]) !== a.lastIndexOf(a[i]))
      return a.slice(a.indexOf(a[i]) + 1, a.lastIndexOf(a[i]));
}
console.log(
  duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"])
);
