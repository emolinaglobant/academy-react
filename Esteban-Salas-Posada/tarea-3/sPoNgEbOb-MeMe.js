function spongeMeme(sentence) {
    let array = sentence.split('')
    let result =''
    array.forEach((value, index) =>{
      if(index%2==0){
        result = result + value.toUpperCase()
      } else{
        result = result + value.toLowerCase()
      }
    });
    return result 
  }