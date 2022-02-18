function duplicateSandwich(arr) {
  let list = typeof arr === "string"
    ? arr.slice().split("")
    : arr.slice();
  
  let seen = new Map();
  
  for (const [curr_i, item] of list.entries()) {
    let prev_i = seen.get(item);
    
    if (typeof prev_i !== "undefined") {
      return typeof arr === "string"
        ? list.slice(prev_i + 1, curr_i).join("")
        : list.slice(prev_i + 1, curr_i);
    } else {
      seen.set(item, curr_i);  
    }
  }
}

describe("Basic tests", function(){
    Test.assertDeepEquals(solve("Codewars@codewars123.com"),[1,18,3,2]);
    Test.assertDeepEquals(solve("bgA5<1d-tOwUZTS8yQ"),[7,6,3,2]);
    Test.assertDeepEquals(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"),[9,9,6,9]);
    Test.assertDeepEquals(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"),[15,8,6,9]);
    Test.assertDeepEquals(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10,7,3,6])
    Test.assertDeepEquals(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7,13,4,10]);
    });