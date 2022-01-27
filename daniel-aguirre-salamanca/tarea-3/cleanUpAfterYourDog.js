function crap(x, bags, cap){
    let capacityLeft = bags*cap;
    for (row of x){
      for (element of row){
        if (element == "@"){
          capacityLeft -= 1;
        }
        else if (element == "D"){
          return "Dog!!" ;
        }
      }
    }
    return (capacityLeft < 0 ? "Cr@p" : "Clean");
  }