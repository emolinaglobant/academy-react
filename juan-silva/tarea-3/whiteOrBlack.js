function mineColor(file, rank) {
    //choose column
    if(["a","c","e","g"].includes(file)){
        //choose row
        return(rank%2==0 ? "white":"black")
    }else{
        //choose row
        return(rank%2==0 ? "black":"white")
    }
  }
  console.log(mineColor("a",8))