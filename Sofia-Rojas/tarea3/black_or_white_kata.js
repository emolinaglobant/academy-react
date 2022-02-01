
function mineColor(file, rank) {
    const letters=["a","b","c","d","e","f","g","h"];
    let position=letters.indexOf(file)+1;
    if ((position+rank)%2==0){
      return "black";
    }
    else{
      return "white";
    }
  }