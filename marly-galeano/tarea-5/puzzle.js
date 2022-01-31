function neighbor(d) {
  var posititon1 = d.getAttribute("data-position");
  var zero = document.getElementById("empty");
  var position2 = zero.getAttribute("data-position");

  let d1 = parseInt(posititon1.substring(0, 1));
  let d2 = parseInt(posititon1.substring(2, 3));

  let z1 = parseInt(position2.substring(0, 1));
  let z2 = parseInt(position2.substring(2, 3));

  if (d1 == z1 || d2 == z2) {
    //same column or row

    if (z1 == d1 + 1 || d1 == z1 + 1 || z2 == d2 + 1 || d2 == z2 + 1) { // consecutive rows or columns
      slide(d); 
    }
  }
}

function slide(d) {
  var zero = document.getElementById("empty");

  //console.log(d.getAttribute("data-position"));
  //console.log(zero.getAttribute("data-position"));

  var value1 = d.value;
  var value2 = zero.value;
  d.value = value2;
  zero.value = value1;

  //console.log(d.value);
  //console.log(zero.value);

  var class1 = d.classList[0];
  var class2 = zero.classList[0];

  d.className = class2;
  zero.className = class1;

  //console.log(d.classList);
  //console.log(zero.classList);

  d.id = zero.id;
  zero.removeAttribute("id");

  //console.log(d.id);
  //console.log(zero.id);
}
